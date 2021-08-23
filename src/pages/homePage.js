import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies, getMoviePage} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'

const HomePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
 const { data: pg} =useQuery(['pageNum', { pageNum: pageNum }], getMoviePage
);
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const pageNum = pg.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      pageNum={pageNum}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
 );
};

export default HomePage;