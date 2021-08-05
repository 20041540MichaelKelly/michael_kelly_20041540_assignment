import React from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMostPopularTvShows} from '../api/tmdb-api'
//import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '../components/cardIcons/playlistAddIcon'

const PopularTvShowsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getMostPopularTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;
  console.log(data.results)
  // Redundant, but necessary to avoid app crashing.
  const watchlists = tvShows.filter(m => m.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  console.log(tvShows)
  //const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Tv Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <PlaylistAddIcon tvShow={tvShow} />
      }}
     />
 );
};

export default PopularTvShowsPage;