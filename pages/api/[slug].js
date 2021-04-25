import db from '../../server.json';

export default function dbHandler({ query: { slug } }, response) {
  
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

  const filtered = db.episodes.filter((episode) => episode.id === slug)

  response.status(200).json(filtered[0]);
}