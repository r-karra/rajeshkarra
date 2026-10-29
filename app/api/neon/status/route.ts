import { NextResponse } from 'next/server';
import { getDb, initDatabase } from '@/lib/db';

export async function GET() {
  const startTime = Date.now();
  const services: Record<string, any> = {};

  // 1. Postgres Database
  const sql = getDb();
  if (sql) {
    try {
      await initDatabase();
      const rows = await sql`SELECT NOW() as current_time, version() as pg_version`;
      const count = await sql`SELECT count(*) FROM portfolio_items`;
      services.postgres = {
        status: 'healthy',
        version: rows[0].pg_version,
        currentTime: rows[0].current_time,
        portfolioItemsCount: parseInt(count[0].count, 10),
      };
    } catch (err: any) {
      services.postgres = { status: 'error', message: err.message };
    }
  } else {
    services.postgres = { status: 'unconfigured' };
  }

  // 2. Neon Function
  const functionUrl = process.env.NEON_FUNCTION_HELLO_BASE_URL;
  if (functionUrl) {
    try {
      const res = await fetch(functionUrl);
      const text = await res.text();
      services.functions = {
        status: res.ok ? 'healthy' : 'degraded',
        statusCode: res.status,
        url: functionUrl,
        sampleOutput: text,
      };
    } catch (err: any) {
      services.functions = { status: 'error', message: err.message };
    }
  } else {
    services.functions = { status: 'unconfigured' };
  }

  // 3. Neon Auth
  const authJwksUrl = process.env.NEON_AUTH_JWKS_URL;
  if (authJwksUrl) {
    try {
      const res = await fetch(authJwksUrl);
      const data = await res.json();
      services.auth = {
        status: res.ok ? 'healthy' : 'degraded',
        statusCode: res.status,
        baseUrl: process.env.NEON_AUTH_BASE_URL,
        jwksUrl: authJwksUrl,
        keysFound: data.keys ? data.keys.length : 0,
      };
    } catch (err: any) {
      services.auth = { status: 'error', message: err.message };
    }
  } else {
    services.auth = { status: 'unconfigured' };
  }

  // 4. Object Storage
  const s3Endpoint = process.env.AWS_ENDPOINT_URL_S3;
  services.objectStorage = {
    status: s3Endpoint && process.env.AWS_ACCESS_KEY_ID ? 'configured' : 'unconfigured',
    endpoint: s3Endpoint || null,
    region: process.env.AWS_REGION || null,
    bucket: 'assets',
  };

  // 5. Realtime
  const realtimeUrl = process.env.NEON_REALTIME_URL;
  services.realtime = {
    status: realtimeUrl ? 'configured' : 'unconfigured',
    url: realtimeUrl || null,
  };

  const totalDuration = Date.now() - startTime;

  return NextResponse.json({
    project: 'crimson-cloud-61024070',
    org: 'org-jolly-brook-66714840',
    branch: process.env.NEON_BRANCH || 'production',
    latency: `${totalDuration}ms`,
    timestamp: new Date().toISOString(),
    services,
  });
}
