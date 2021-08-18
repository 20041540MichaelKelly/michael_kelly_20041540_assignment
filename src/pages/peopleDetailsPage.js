import React from "react";
import PageTemplate from "../components/templatePeopleListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPeople} from '../api/tmdb-api'

const PeopleDetailsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('person', getPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results;
console.log(people)
  return (
    <PageTemplate
      title="Popular People"
      people={people}
    />
 );
};

export default PeopleDetailsPage;