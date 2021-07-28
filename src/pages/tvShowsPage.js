import React from "react";
import PageTemplate from "../components/templateTvShowsPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvShows} from '../api/tmdb-api'
//import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '../components/cardIcons/playlistAddIcon'

const TvShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('show', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const show = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlists = show.filter(m => m.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="TV Shows"
      show={show}
      action={(sho) => {
        return <PlaylistAddIcon sho={sho} />
      }}
    />
 );
};

export default TvShowsPage;