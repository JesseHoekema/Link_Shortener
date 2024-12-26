import db from '$lib/db';
import { redirect } from '@sveltejs/kit';

export const GET = ({ params }) => {
  const { token } = params;

  // Zoek de lange URL in de database
  const stmt = db.prepare('SELECT long FROM links WHERE short = ?');
  const link = stmt.get(token);

  if (link) {
    // Redirect naar de lange URL
    throw redirect(302, link.long);
  }

  return new Response('<h1>Korte link niet gevonden.</h1>', { status: 404 });
};
