import axios from 'axios';

export async function getSnackRecommendations(genre) {
  // Define queries based on genre
  const snackQueryMap = {
    Action: 'spicy snacks',
    Comedy: 'sweet snacks',
    Horror: 'chocolate treats',
    Romance: 'romantic desserts',
    Adventure: 'trail mix',
  };

  const snackQuery = snackQueryMap[genre] || 'popcorn';

  const url = `https://api.spoonacular.com/food/menuItems/search?query=${snackQuery}&apiKey=${process.env.SPOONACULAR_API_KEY}`;
  
  try {
    const response = await axios.get(url);
    console.log(response)
    return response.data.menuItems.map(item => ({
      name: item.title,
      restaurant: item.restaurantChain || 'Homemade',
    }));
  } catch (error) {
    console.error('Error fetching snack recommendations:', error.message);
    return [];
  }
}
