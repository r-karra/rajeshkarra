// lib/db.ts: Neon Serverless Postgres Client
import { neon, neonConfig } from '@neondatabase/serverless';

// Configure caching and fetch options for serverless environments
neonConfig.fetchConnectionCache = true;

const getDatabaseUrl = () => {
  return (
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.NEON_DATABASE_URL ||
    ''
  );
};

export const getDb = () => {
  const url = getDatabaseUrl();
  if (!url) {
    return null;
  }
  return neon(url);
};

// Initialize Neon table if not present
export async function initDatabase() {
  const sql = getDb();
  if (!sql) return false;

  try {
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
    return true;
  } catch (error) {
    console.error('Failed to initialize Neon schema:', error);
    return false;
  }
}
