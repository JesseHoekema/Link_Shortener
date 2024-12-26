import db from '$lib/db';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
  const { url } = await request.json();

  if (!url) {
    return json({ error: 'Geen URL opgegeven.' }, { status: 400 });
  }

  // Genereer een korte code
  const short = Math.random().toString(36).substring(2, 8);

  // Sla de link op in de database
  const stmt = db.prepare('INSERT INTO links (short, long) VALUES (?, ?)');
  stmt.run(short, url);

  // Retourneer de korte link met dynamische padstructuur
  const shortUrl = `${short}`;
  return json({ short: shortUrl });
};
