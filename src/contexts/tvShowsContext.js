import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [watchlist, setWatchlist] = useState( [] )

  const addToFavorites = (tvShow) => {
    setFavorites([...favorites,tvShow.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (tvShow) => {
    setFavorites( favorites.filter(
      (mId) => mId !== tvShow.id
    ) )
  };

  const addReview = (tvShow, review) => {
    setMyReviews( {...myReviews, [tvShow.id]: review } )
  };

  const addToWatchlist = (tvShow) => {
    setWatchlist([...watchlist,tvShow.id])
  };
  // We will use this function in a later section
  const removeFromWatchlist = (tvShow) => {
    setWatchlist( watchlist.filter(
      (mId) => mId !== tvShow.id
    ) )
  };

  return (
    <TvShowsContext.Provider
      value={{
        favorites,
        watchlist,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;

  