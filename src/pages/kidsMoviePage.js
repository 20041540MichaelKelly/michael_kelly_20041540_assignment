import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getKidsMovies} from '../api/tmdb-api'
//import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '../components/cardIcons/playlistAddIcon'

const KidsMoviePage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('kids', getKidsMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlists = movies.filter(m => m.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Kids Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
 );
};

export default KidsMoviePage;