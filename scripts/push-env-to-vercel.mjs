import fs from 'fs';
import { execSync } from 'child_process';

const envContent = fs.readFileSync('.env.local', 'utf-8');
const lines = envContent.split(/\r?\n/);

const envMap = {};

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eqIdx = trimmed.indexOf('=');
  if (eqIdx === -1) continue;
  const key = trimmed.slice(0, eqIdx).trim();
  let val = trimmed.slice(eqIdx + 1).trim();
  // Strip surrounding quotes
  if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
    val = val.slice(1, -1);
  }
  // Ignore Vercel internal OIDC tokens or system tokens
  if (key.startsWith('VERCEL_')) continue;
  if (key === 'ADMIN_SECRET_KEY') continue; // already added

  envMap[key] = val;
}

console.log('Variables to push to Vercel:', Object.keys(envMap));

for (const [key, val] of Object.entries(envMap)) {
  for (const env of ['production', 'preview', 'development']) {
    console.log(`Adding ${key} to ${env}...`);
    try {
      execSync(`npx vercel env add ${key} ${env} --force`, {
        input: val + '\n',
        stdio: ['pipe', 'inherit', 'inherit'],
      });
    } catch (err) {
      console.warn(`Warning setting ${key} for ${env}:`, err.message);
    }
  }
}

console.log('✅ All environment variables pushed to Vercel successfully!');
