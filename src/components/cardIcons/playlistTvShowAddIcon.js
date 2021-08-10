import React, { useContext } from "react";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import { TvShowsContext } from "../../contexts/tvShowsContext";
//import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const AddToTvShowPlaylistIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToWatchlist(tvShow);
    console.log(tvShow);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
    
  );
};
export default AddToTvShowPlaylistIcon;