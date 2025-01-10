import axios from 'axios';

export async function discoverMovies(region, language, genre_id, sortBy = 'popularity.desc') {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&region=${region}&language=${language}&sort_by=${sortBy}&with_genres=${genre_id}`;

  try {
    const response = await axios.get(url);
    const movies = response.data.results || [];
    console.log(formatMovies(movies))
    return formatMovies(movies);
  } catch (error) {
    throw new Error(`Error discovering movies: ${error.message} ${error.stack}`);
  }
}

function formatMovies(movies) {
  return movies.slice(0, 10).map(movie => ({
    title: movie.title,
    rating: movie.vote_average,
    releaseYear: new Date(movie.release_date).getFullYear(),
    overview: movie.overview || 'No overview available.',
    id: movie.id
  }));
}