import { BrowserContext } from 'playwright';
import fs from 'fs';
import path from 'path';

export async function loadSession(context: BrowserContext): Promise<void> {
  const sessionsPath = path.resolve(
    import.meta.dirname,
    '../config/sessions.json'
  );
  const raw = fs.readFileSync(sessionsPath, 'utf-8');
  const data = JSON.parse(raw);

  context.addCookies(data.user1);
}
