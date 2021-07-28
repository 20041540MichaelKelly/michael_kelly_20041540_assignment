import React from "react";
import { withRouter } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowsPage";
//import useMovie from "../hooks/useMovie";
import { getTvShow } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const TvShowDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: show, error, isLoading, isError } = useQuery(
    ["show", { id: id }],
    getTvShow
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {show ? (
        <>
          <PageTemplate show={show}>
            <TvShowDetails show={show} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV Show details</p>
      )}
    </>
  );
};

export default withRouter(TvShowDetailsPage);