import { neon } from '@neondatabase/serverless';

const databaseUrl = process.env.DATABASE_URL;
console.log('Testing DATABASE_URL:', databaseUrl ? 'Configured (' + databaseUrl.substring(0, 30) + '...)' : 'MISSING');

if (!databaseUrl) {
  console.error('DATABASE_URL is missing in environment');
  process.exit(1);
}

try {
  const sql = neon(databaseUrl);
  const rows = await sql`SELECT NOW() as current_time, version() as pg_version`;
  console.log('✅ Postgres Connected Successfully:');
  console.log('  Time:', rows[0].current_time);
  console.log('  Version:', rows[0].pg_version);

  // Test table creation and query
  await sql`
    CREATE TABLE IF NOT EXISTS portfolio_items (
      id VARCHAR(128) PRIMARY KEY,
      category VARCHAR(64) NOT NULL,
      title TEXT NOT NULL,
      subtitle TEXT,
      description TEXT,
      metadata JSONB,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;
  console.log('✅ Table `portfolio_items` verified/created.');

  // Test insertion and count
  await sql`
    INSERT INTO portfolio_items (id, category, title, subtitle, description, metadata)
    VALUES ('neon-test', 'system', 'Neon Serverless Connected', 'Verified live', 'End-to-end integration verified', '{"tested": true}')
    ON CONFLICT (id) DO UPDATE SET updated_at = CURRENT_TIMESTAMP;
  `;
  const count = await sql`SELECT count(*) FROM portfolio_items;`;
  console.log('✅ Sample item upserted. Total portfolio_items in DB:', count[0].count);
} catch (error) {
  console.error('❌ Database test failed:', error);
  process.exit(1);
}

