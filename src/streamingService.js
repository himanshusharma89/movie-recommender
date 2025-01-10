import axios from 'axios';

export async function getStreamingLinks(movieId, region) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
      },
    });
    const link = response.data.results[region.toUpperCase()]?.link || "";

    return { movieId, links: link || 'No streaming providers available.' };
  } catch (error) {
    console.error(`Error fetching streaming links for movie ID ${movieId}: ${error.message}`);
    return { movieId, links: 'Error fetching streaming links.' };
  }
}
