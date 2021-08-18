import React from "react";
import People from "../peopleCard";
import Grid from "@material-ui/core/Grid";

const PeopleList = ( {people}) => {
    console.log(people)
  let peopleCards = people.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
    
      <People key={m.id} person={m}  />
    </Grid>
  ));
  console.log(peopleCards)
  return peopleCards; 
};

export default PeopleList;