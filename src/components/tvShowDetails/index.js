import React, { useState} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import TvShowReviews from "../tvShowReviews"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const TvShowDetails = ({ tvShow }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {tvShow.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {tvShow.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<AccessTimeIcon />} label={`${tvShow.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${tvShow.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${tvShow.vote_average} (${tvShow.vote_count}`}
        />
        <Chip label={`Released: ${tvShow.release_date}`} />
      </Paper>
      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Production Countries" className={classes.chip} color="primary" />
        </li>
        {tvShow.production_countries.map((pc) => (
          <li key={pc.name}>
            <Chip label={pc.name} className={classes.chip} />
          </li>
        ))}
        </Paper>

        <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <TvShowReviews tvShow={tvShow} />
      </Drawer>
    </>
  );
};

export default  TvShowDetails ;