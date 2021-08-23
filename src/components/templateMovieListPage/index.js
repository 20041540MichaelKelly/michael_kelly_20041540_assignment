import React, { useState, useEffect } from "react";
import Header from "../headerMovieList";
import PageNav from "../pageNav";
import FilterCard from "../filterMoviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MovieList from "../movieList";
import axios from "axios";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function MovieListPageTemplate({ movies, pageNum, title, action }) {
  
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  
  const [state, setState] = useState({
    count: undefined,
    limit: undefined,
    next: "",
    previous: "",
    start: undefined,
    results: []
  });
  
  // useEffect(() => {
  //   const limit = 5;
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=
  //       ${pageNum}`
  //       )
  //     .then((response) => {
  //       setState(response.data);
  //     })
  //     .catch((error) => {
  //       setState({
  //         next: "not blank" //just so I can test with invalid API results
  //       });
  //     });
  // }, [pageNum]);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;

    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  const hasPrevious = pageNum > 1;
  const hasNext = !!state.next;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
        
      </Grid>
    <Grid item container spacing={5}>
    <div>showing page #{pageNum}</div>
    {/* {hasPrevious && ( */}
      <Link to={`/movies/page/${pageNum - 1}`}>Previous</Link>
    {/* )} */}
    {/* {hasNext &&  */}
    <Link to={`/movies/page/${pageNum + 1}`}>Next</Link>
    {/* } */}
  </Grid>
  </Grid>
  );
}
export default MovieListPageTemplate;