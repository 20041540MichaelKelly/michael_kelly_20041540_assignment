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

const PeopleDetails = ({ person, cast }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
console.log(person)
console.log(cast)

    
  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Films Involved in" className={classes.chip} color="primary" />
        </li>
        <li>
        {cast.cast.map((g) => (
          <ul key={g.title}>
            <li><Chip label={g.title} className={classes.chip} />
            <Chip label={g.vote_average} className={classes.chip} /></li>
          </ul>
        ))}
          {/* <Chip label={person.place_of_birth} className={classes.chip} /> */}
        </li>
      </Paper>
      <Paper component="ul" className={classes.root}>
        {/* <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} /> */}
        <Chip
          icon={<MonetizationIcon />}
        //   label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${cast.cast[0].vote_average} (${cast.cast[0].vote_count})`}
        />
        {/* <Chip label={`Released: ${movie.release_date}`} /> */}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Production Countries" className={classes.chip} color="primary" />
        </li>
        {/* {movie.production_countries.map((pc) => (
          <li key={pc.name}>
            <Chip label={pc.name} className={classes.chip} />
          </li>
        ))} */}
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
      
    </>
  );
};

export default PeopleDetails ;