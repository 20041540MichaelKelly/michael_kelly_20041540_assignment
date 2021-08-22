import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { TvShowsContext } from "../../contexts/tvShowsContext";

const RemoveFromTvWatchlistIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleRemoveFromWatchlist = (e) => {
    e.preventDefault();
    context.removeTvShowFromWatchlist(tvShow);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromWatchlist}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvWatchlistIcon;