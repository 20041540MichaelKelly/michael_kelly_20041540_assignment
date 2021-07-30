import React, { useState } from "react";
import Header from "../headerTvShowList";
import FilterCard from "../filterTvShowCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TvShowList from "../tvShowList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function TvShowListPageTemplate({ tvShows, title, action }) {
  console.log(tvShows)
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedTvShows = tvShows
    .filter((m) => {
        if(m.title){
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
        }
        return m.title
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });
console.log(displayedTvShows)
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

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
        <TvShowList action={action} tvShows={tvShows}></TvShowList>
      </Grid>
    </Grid>
  );
}
export default TvShowListPageTemplate;