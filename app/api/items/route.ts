import { NextResponse } from 'next/server';
import { getDb, initDatabase } from '@/lib/db';

export async function GET() {
  const sql = getDb();
  if (!sql) {
    return NextResponse.json({
      connected: false,
      message: 'Neon database URL not configured in environment variables. Using client state.',
      items: [],
    });
  }

  try {
    await initDatabase();
    const rows = await sql`
      SELECT id, category, title, subtitle, description, metadata, updated_at
      FROM portfolio_items
      ORDER BY updated_at DESC
    `;
    return NextResponse.json({
      connected: true,
      items: rows,
    });
  } catch (error: any) {
    console.error('Error fetching from Neon:', error);
    return NextResponse.json(
      { connected: false, error: error.message, items: [] },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const sql = getDb();
  if (!sql) {
    return NextResponse.json(
      {
        connected: false,
        message: 'Neon DB not yet deployed. Cached locally.',
      },
      { status: 200 }
    );
  }

  try {
    await initDatabase();
    const body = await req.json();
    const { id, category, title, subtitle, description, metadata } = body;

    if (!id || !title || !category) {
      return NextResponse.json(
        { error: 'id, category, and title are required' },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO portfolio_items (id, category, title, subtitle, description, metadata, updated_at)
      VALUES (${id}, ${category}, ${title}, ${subtitle || ''}, ${description || ''}, ${JSON.stringify(metadata || {})}, CURRENT_TIMESTAMP)
      ON CONFLICT (id) DO UPDATE SET
        title = EXCLUDED.title,
        subtitle = EXCLUDED.subtitle,
        description = EXCLUDED.description,
        metadata = EXCLUDED.metadata,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *;
    `;

    return NextResponse.json({ success: true, item: result[0] });
  } catch (error: any) {
    console.error('Error saving to Neon DB:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
