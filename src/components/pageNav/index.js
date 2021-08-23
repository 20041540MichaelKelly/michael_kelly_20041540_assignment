import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1.5),
  },
}));

const PageNav = (pageNum) => {
    const State = useState("0");
  const classes = useStyles();
  const hasPrevious = pageNum > 1;
  const hasNext = !!State.next;
  return (
      
    <div>
     {hasPrevious && (
        <Link to={`/movies/page/${pageNum - 1}`}>Previous</Link>
    )}
    {hasNext && (
       <Link to={`/movies/page/${pageNum + 1}`}>Next</Link>
    )}
    </div>
  );
};

export default PageNav;