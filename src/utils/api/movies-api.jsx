/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const getMovies = (movieID) => {
  const response = useSWR('https://www.majorcineplex.com/apis/get_movie_avaiable', fetcher, {
    keepPreviousData: true,
  });
  let movieData = {};
  if (movieID && !response.isLoading) {
    movieData = response.data.movies.find((movie) => movie.id.toString() === movieID);
  } else {
    movieData = response.data;
  }
  return {
    data: movieData,
    error: response.error,
    isLoading: response.isLoading,
  };
};

export { getMovies };
