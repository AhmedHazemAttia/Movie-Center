const API_KEY =
  "17c7f5816d4f8027e13727af5715dbed";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovie = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovie = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`
  );
  const data = await response.json();
  return data.results;
};
