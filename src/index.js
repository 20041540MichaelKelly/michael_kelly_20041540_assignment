import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import UpComingMoviesPage from "./pages/upComingMoviesPage";
import TvShowsPage from "./pages/tvShowsPage";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import PopularTvShowsPage from "./pages/popularTvShowsPage";
import FavoriteMoviesPage from "./pages/favouriteMoviesPage"; 
import AnonymousAuthPage from "./pages/anonymousAuthPage"; 

import MovieReviewPage from "./pages/movieReviewPage";
import TvShowsDetailsPage from "./pages/tvShowsDetailsPage";
import WatchlistMoviesPage from "./pages/watchlistMoviePage";
import KidsMoviePage from "./pages/kidsMoviePage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TvShowsContextProvider from "./contexts/tvShowsContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <TvShowsContextProvider>
        <MoviesContextProvider>
            {" "}
            <Switch>
                <Route exact path="/tv/popular" component={PopularTvShowsPage} />
                <Route exact path="/tv" component={TvShowsPage} />
                <Route path="/tv/:id" component={TvShowsDetailsPage} />
                <Route exact path="/movies/kids" component={KidsMoviePage} />
                <Route exact path="/movies/upcoming" component={UpComingMoviesPage} />
                <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                <Route path="/reviews/:id" component={MovieReviewPage} />
                {/* <Route path="/reviews/tv/:id" component={TvReviewPage} /> */}
                <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <Route exact path="/movies/watchlist" component={WatchlistMoviesPage} />
                <Route path="/movies/:id" component={MoviePage} />
                

                <Route exact path="/" component={AnonymousAuthPage} />
                <Redirect from="*" to="/" />
                
            </Switch>
            </MoviesContextProvider>
            </TvShowsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));