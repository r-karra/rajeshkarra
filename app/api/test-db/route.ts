import { NextResponse } from 'next/server';
import { getDb, initDatabase } from '@/lib/db';

export async function GET() {
  const sql = getDb();
  if (!sql) {
    return NextResponse.json({
      status: 'disconnected',
      message: 'DATABASE_URL is not set. Run `neon deploy` to pull credentials into .env.local',
      timestamp: new Date().toISOString(),
    });
  }

  try {
    const startTime = Date.now();
    await initDatabase();
    const result = await sql`SELECT NOW() as current_time, version() as pg_version`;
    const latency = Date.now() - startTime;

    return NextResponse.json({
      status: 'connected',
      latency: `${latency}ms`,
      currentTime: result[0].current_time,
      version: result[0].pg_version,
      message: 'Successfully connected to Neon Serverless Postgres!',
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 'error',
        error: error.message,
        message: 'Failed to connect to Neon database',
      },
      { status: 500 }
    );
  }
}

