import { NextResponse } from 'next/server';

const getExpectedKey = () => process.env.ADMIN_SECRET_KEY || 'rajesh@strangeworks2025';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { key } = body;
    const expected = getExpectedKey();

    if (!key || key !== expected) {
      return NextResponse.json(
        { success: false, message: 'Invalid Admin Access Key' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      role: 'admin',
      adminName: 'Rajesh Karra',
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Malformed authentication request' },
      { status: 400 }
    );
  }
}

export async function GET(req: Request) {
  const adminKey = req.headers.get('x-admin-key');
  const expected = getExpectedKey();

  if (adminKey && adminKey === expected) {
    return NextResponse.json({ authenticated: true, adminName: 'Rajesh Karra' });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
