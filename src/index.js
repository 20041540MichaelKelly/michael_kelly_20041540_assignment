import React from "react";
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, useLocation } from "react-router-dom";
import UpComingMoviesPage from "./pages/upComingMoviesPage";
import TvShowsPage from "./pages/tvShowsPage";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import PopularTvShowsPage from "./pages/popularTvShowsPage";
import FavoriteMoviesPage from "./pages/favouriteMoviesPage"; 
import LoginHeader from './components/loginHeader';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
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
import { TitleRounded } from "@material-ui/icons";
import PeopleDetailsPage from "./pages/peopleDetailsPage";
import PeoplePage from "./pages/peoplePage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});



function ChangeTitle()  {
  const location = useLocation();
  console.log(location);
  if(location.pathname == '/login' || location.pathname == '/signup' || location.pathname == '/'){
      return <LoginHeader />
}else{
       return <SiteHeader /> 
    }
}


const App = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ChangeTitle/>
        <TvShowsContextProvider>
        <MoviesContextProvider>
        <AuthProvider>
          
            {" "}
            <Switch>
                <Route exact path="/person" component={PeopleDetailsPage}/>
                <Route path="/person/:id" component={PeoplePage} />
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/dashbord" component={Dashboard} />
                <Route exact path="/signup" component={SignUp} />
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
                <Route exact path="/movies" component={HomePage}/>
                

                {/* <Route exact path="/" component={AnonymousAuthPage} /> */}
                <Redirect from="*" to="/" />
                
            </Switch>
            
            </AuthProvider>
            </MoviesContextProvider>
            </TvShowsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));