import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistIcon from "@material-ui/icons/PlaylistAddCheck";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { TvShowsContext } from "../../contexts/TvShowsContext";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function TvCard({ shows, action }) {
  const classes = useStyles();
  const { favorites } = useContext(TvShowsContext);
  const { watchlist } = useContext(TvShowsContext);
  if (favorites.find((id) => id === shows.id)) {
    shows.favorite = true;
  } else {
    shows.favorite = false
  }

  if (watchlist.find((id) => id === shows.id)) {
    shows.watchlist = true;
  } else {
    shows.watchlist= false
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar={
          shows.favorite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : 
          shows.watchlist ? (
            <Avatar className={classes.avatar}>
              <PlaylistIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {shows.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={
          shows.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {shows.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {shows.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(shows)}
        <Link to={`/tv/${shows.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}