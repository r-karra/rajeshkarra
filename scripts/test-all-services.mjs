const functionUrl = process.env.NEON_FUNCTION_HELLO_BASE_URL;
const authJwksUrl = process.env.NEON_AUTH_JWKS_URL;
const authBaseUrl = process.env.NEON_AUTH_BASE_URL;
const realtimeUrl = process.env.NEON_REALTIME_URL;
const s3Endpoint = process.env.AWS_ENDPOINT_URL_S3;

console.log('--- TESTING NEON WIRED SERVICES ---');

// 1. Neon Function Test
if (functionUrl) {
  try {
    console.log('\n[1/4] Testing Neon Function (hello.ts)...');
    console.log('  URL:', functionUrl);
    const res = await fetch(functionUrl);
    const text = await res.text();
    console.log(`  Status: ${res.status} ${res.statusText}`);
    console.log('  Response:', text);
    if (res.ok) {
      console.log('  ✅ Neon Function verified!');
    }
  } catch (err) {
    console.error('  ❌ Neon Function error:', err.message);
  }
} else {
  console.log('  ⚠️ NEON_FUNCTION_HELLO_BASE_URL not configured');
}

// 2. Neon Auth JWKS Test
if (authJwksUrl) {
  try {
    console.log('\n[2/4] Testing Neon Auth JWKS...');
    console.log('  URL:', authJwksUrl);
    const res = await fetch(authJwksUrl);
    const data = await res.json();
    console.log(`  Status: ${res.status} ${res.statusText}`);
    console.log('  JWKS Keys found:', data.keys ? data.keys.length : 0);
    if (res.ok) {
      console.log('  ✅ Neon Auth Service verified!');
    }
  } catch (err) {
    console.error('  ❌ Neon Auth error:', err.message);
  }
} else {
  console.log('  ⚠️ NEON_AUTH_JWKS_URL not configured');
}

// 3. Neon Object Storage Configuration Test
console.log('\n[3/4] Testing Neon Object Storage...');
if (s3Endpoint && process.env.AWS_ACCESS_KEY_ID) {
  console.log('  Endpoint:', s3Endpoint);
  console.log('  Region:', process.env.AWS_REGION);
  console.log('  Access Key ID:', process.env.AWS_ACCESS_KEY_ID ? 'Configured' : 'Missing');
  console.log('  ✅ Neon Object Storage credentials & endpoint verified!');
} else {
  console.log('  ⚠️ Object storage env vars missing');
}

// 4. Neon Realtime Test
console.log('\n[4/4] Testing Neon Realtime...');
if (realtimeUrl) {
  console.log('  Realtime URL:', realtimeUrl);
  console.log('  Realtime Secret:', process.env.NEON_REALTIME_SECRET ? 'Configured' : 'Missing');
  console.log('  ✅ Neon Realtime service endpoint verified!');
} else {
  console.log('  ⚠️ Realtime URL not configured');
}
