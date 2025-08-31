import { BrowserContext } from 'playwright';
import session from '../config/sessions.json' with { type: 'json' };

export async function loadSession(context: BrowserContext): Promise<void> {
  context.addCookies(session.user1);
}
