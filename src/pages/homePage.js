import React,{ useState, useEffect } from "react"; 
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getMovies, getMoviePage} from '../api/tmdb-api'
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'
import PageNav from "../components/pageNav";
import axios from "axios";

const HomePage = (props) => {
  const { pageNumber } = props.match.params;
  const pageNum = pageNumber ? parseInt(pageNumber, 10) : 1;
 // const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
 const { data, error, isLoading, isError } =useQuery(['pageNum', { pageNum: pageNum }], getMoviePage
);
// console.log({pg})
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;


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