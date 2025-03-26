import axios from 'axios';

/**
 * Discover movies based on genre, region, and language.
 * @param {string} region - The region for filtering movies (e.g., 'us', 'uk').
 * @param {string} language - The language for movie descriptions (e.g., 'en-US').
 * @param {string} genre_id - The movie genre ID (e.g., '28' for Action).
 * @param {string} sortBy - The sorting order (default: 'popularity.desc').
 * @returns {Promise<Array>} - A list of formatted movie objects.
 */
export async function discoverMovies(region, language, genre_id, sortBy = 'vote_average.desc') {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&region=${region}&language=${language}&sort_by=${sortBy}&with_genres=${genre_id}`;

  try {
    const response = await axios.get(url);
    return formatMovies(response.data.results || []);
  } catch (error) {
    throw new Error(`Error discovering movies: ${error.message}`);
  }
}

/**
 * Fetch details for a specific movie by title.
 * @param {string} movie_id - The movie id to search for.
 * @returns {Promise<Object>} - Movie details including rating, overview, release year and more.
 */
export async function getMovieDetails(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`;

  try {
    const response = await axios.get(url);
    return response.data || {};
  } catch (error) {
    throw new Error(`Error fetching movie details: ${error.message}`);
  }
}

/**
 * Format movie results to return only relevant details.
 * @param {Array} movies - List of movies from API response.
 * @returns {Array} - Formatted movie list.
 */
function formatMovies(movies) {
  return movies.slice(0, 10).map(movie => ({
    title: movie.title,
    rating: movie.vote_average,
    releaseYear: new Date(movie.release_date).getFullYear(),
    overview: movie.overview || 'No overview available.',
    id: movie.id
  }));
}