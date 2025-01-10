# TMDb Movie Recommendation Tool

A **Node.js-based movie recommendation tool** that uses **GPTScript** and the **TMDb API** to recommend the top-rated movies based on a search query. This tool is designed to be integrated into platforms like **Otto8**, enabling AI agents to provide automated movie suggestions.

---

## Features

- Fetches movies from **TMDb** based on a search query (e.g., genre, keyword, or actor).
- Returns the **top 10 highly-rated movies** as a response.
- Implements **GPTScript** for easy agent integration.
- Built with **Node.js** for flexibility and scalability.

---

## Project Structure

```yaml
tmdb-movie-tool
├── src
│   ├── movieTool.js       # Main tool file to process agent input
│   ├── movieService.js    # Service file for TMDb API interactions
├── .env                   # Environment variables (TMDb API key)
├── package.json           # Dependencies and scripts
├── tool.gpt               # GPTScript definition
```

---

## Prerequisites

Before you begin, make sure you have the following:

1. **Node.js** installed on your system ([Download Node.js](https://nodejs.org)).
2. A **TMDb API Key**: Sign up at [TMDb](https://www.themoviedb.org/) to generate an API key.
3. **GPTScript** installed: Follow the [installation guide](https://docs.gptscript.ai/).
4. **OpenAI API Key**: Required for GPTScript-powered features.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tmdb-movie-tool.git
   cd tmdb-movie-tool
   ```
2. Install project dependencies:

    ```bash
    npm install
    ```
3. Create a `.env` file in the project root and add your `TMDb API` Key:

    ```bash
    TMDB_API_KEY=your_tmdb_api_key
    ```

---

## Defining the Tool with GPTScript
The tool.gpt file describes the tool's functionality, parameters, and execution steps.

```yaml
Name: MovieRecommender
Chat: true
Tools: fetch-movies
Description: An intelligent agent that recommends top-rated movies based on user sentiment or search queries.
Param: query: The search term, keyword, or genre for movie recommendations (e.g., "Action", "Comedy", "Sci-Fi").

You are a smart and fun movie recommendation agent. Follow these steps:

1. Start with a friendly question: "How are you feeling today? Any specific mood or vibe you're going for?"
2. Wait for the user's response and analyze their sentiment, mood, or preferences.
3. Use this analysis to determine the most suitable movie genre or actor (e.g., "Action", "Adventure", "Angelina Jolie").
4. Respond casually: "Based on your mood, I think you'd enjoy some {genre} movies! Let me fetch those for you."
5. Pass the determined `query` parameter to the `fetch-movies` tool and retrieve the movie data.
6. Wait for the results from `fetch-movies` to return.
7. Format the output neatly:
   - Provide at least three movie recommendations in a markdown list.
   - Include titles, ratings, and release years.
   - Optionally, add a short comment or fun trivia about each movie.
8. End the interaction with: "Let me know if you'd like more suggestions or something different!"
9. Ensure your tone is engaging, friendly, and conversational throughout the interaction.

---

Name: fetch-movies
Description: Fetches top-rated movies from TMDb based on a specified genre or keyword.
Param: genre: The movie genre or keyword to fetch (e.g., "Action", "Romance", "Sci-Fi").

You are tasked with fetching and formatting movie data. Follow these steps:

1. Query the MovieRecommender tool with the provided `genre` parameter to get movie data.
2. Filter the results to include:
   - Titles, ratings, and release years.
   - A maximum of 10 movies, sorted by rating in descending order.
3. Format the results into a markdown list:
   - Use bullet points for each movie.
   - Include the title, rating, and release year.
   - Add optional trivia or a short comment for a better user experience.
4. Return the markdown list for display.

#!/usr/bin/env npm --silent --prefix ${GPTSCRIPT_TOOL_DIR} run tool -- recommend-movie

---

!metadata:*:category
Entertainment

---

!metadata:*:icon
https://cdn.jsdelivr.net/npm/@phosphor-icons/core@2/assets/duotone/film-slate-duotone.svg
```

---

## Explore Further

- Learn More About GPTScript: [GPTScript Documentation](https://docs.gptscript.ai/)
- Visit Acorn’s Blog: [Acorn Blog](https://www.acorn.io/resources/blog/)
- Join the Community: Share your tools on [Discord](https://discord.com/invite/9sSf4UyAMC) or [GitHub forums](https://github.com/gptscript-ai/gptscript)!