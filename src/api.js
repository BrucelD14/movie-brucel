import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?api_key=${apiKey}`
  );
  return movie.data.results
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  return;
};
