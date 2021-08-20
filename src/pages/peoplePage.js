import React from "react";
import { withRouter } from "react-router-dom";
import PeopleDetails from "../components/peopleDetails";
import PageTemplate from "../components/templatePeoplePage";
//import useMovie from "../hooks/useMovie";
import { getPerson, getPersonMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PeoplePage = (props) => {
  const { id } = props.match.params

  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson, getPersonMovieCredits, 
  );

  const {  data: cast }  = useQuery(
    ["cast", { id: id }],
    getPersonMovieCredits)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  
  return (
    
    <>
      {person, cast ? (
        <>
          <PageTemplate person={person}>
            <PeopleDetails person={person} cast={cast}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for person details</p>
      )}
    </>
  );
};

export default withRouter(PeoplePage);