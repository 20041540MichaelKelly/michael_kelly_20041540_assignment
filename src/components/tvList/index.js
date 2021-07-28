import React from "react";
import Tv from "../tvCard";
import Grid from "@material-ui/core/Grid";

const TvList = ( {show, action }) => {
  let tvShowCards = show.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Tv key={s.id} show={s} action={action} />
    </Grid>
  ));
  return tvShowCards;
};

export default TvList;