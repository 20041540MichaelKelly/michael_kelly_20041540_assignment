import React, { useContext } from "react";
import PageTemplate from "../components/templateTvShowListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveTvShowFromWatchlist from "../components/cardIcons/removeTvShowFromWatchlist";
import WriteReview from "../components/cardIcons/writeTvReview";

const WatchlistTvShowsPage = () => {
  const {watchlist: Ids } = useContext(TvShowsContext);

  // Create an array of queries and run in parallel.
  const watchlistTvShowsQueries = useQueries(
    Ids.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = watchlistTvShowsQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }
  const tvShows = watchlistTvShowsQueries.map((q) => q.data);
  //const toDo = () => true;
 console.log(tvShows);
  return (
    <PageTemplate
      title="Watchlist Tv Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveTvShowFromWatchlist tvShow={tvShow} />
            <WriteReview tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default WatchlistTvShowsPage;