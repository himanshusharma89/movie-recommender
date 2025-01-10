import { discoverMovies } from './movieService.js';
import { getSnackRecommendations } from './snackService.js';
import { getStreamingLinks } from './streamingService.js';
import 'dotenv/config'; // For reading .env variables


if (process.argv.length !== 3) {
  console.error('Usage: node tool.js <command>');
  process.exit(1);
}

const cmd = process.argv[2];

try {
  const genre = process.env.GENRE || ''; // Default to empty if not provided
  const region = process.env.REGION || 'US'; // Default to 'US'
  switch (cmd) {
    case 'recommend-movie':
      const language = process.env.LANGUAGE || 'en-US'; // Default to English (US)
      const genre_id = process.env.GENRE_ID || '12'
      const movies = await discoverMovies(region, language, genre_id);
      console.log(JSON.stringify(movies)); // Log movie result for the agent
      break;
    case 'fetch-snacks':
      const snacks = getSnackRecommendations(genre)
        .then(snacks => console.log(JSON.stringify(snacks, null, 2)))
        .catch(error => console.error(`Error fetching snacks: ${error.message}`));
      console.log(JSON.stringify(snacks)); // Log snack result for the agent
      break;
    case 'fetch-streaming':
      const movieListID = process.env.MOVIE_LIST_ID.split(',') || []; // Default to empty list
      Promise.all(movieListID.map(movieID => getStreamingLinks(movieID.trim(), region)))
        .then(results => console.log(JSON.stringify(results, null, 2)))
        .catch(error => console.error(`Error fetching streaming links: ${error.message} ${error.stack}`));
      break;
    default:
      console.error(`Unknown command: ${cmd}`);
      process.exit(1);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
