import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} )
  const [watchlist, setWatchlist] = useState( [] )

  const addToFavorites = (shows) => {
    setFavorites([...favorites,shows.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (shows) => {
    setFavorites( favorites.filter(
      (sId) => sId !== shows.id
    ) )
  };

  const addReview = (shows, review) => {
    setMyReviews( {...myReviews, [shows.id]: review } )
  };

  const addToWatchlist = (shows) => {
    setWatchlist([...watchlist,shows.id])
  };
  // We will use this function in a later section
  const removeFromWatchlist = (shows) => {
    setWatchlist( watchlist.filter(
      (sId) => sId !== shows.id
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

  