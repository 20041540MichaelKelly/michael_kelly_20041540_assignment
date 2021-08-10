import React from "react";
import TvCard from "../tvCard";
import Grid from "@material-ui/core/Grid";

const TvShowList = ( {tvShows, action }) => {
  let tvShowCards = tvShows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvCard key={m.id} tvShow={m} action={action} />
    </Grid>
  ));
  console.log(tvShowCards)
  console.log('tvCard'+tvShowCards)
  return tvShowCards;
};

export default TvShowList;