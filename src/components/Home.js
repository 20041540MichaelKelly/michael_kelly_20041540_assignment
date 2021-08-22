import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Auth";
import  imageMovie from '../images/stelar_movie.jpg';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  return (
    <>
      <h1>Home</h1>
      {currentUser ? (
        <p>
          You are logged In {currentUser.email}- <Link to="/movies">View Dashboard</Link>
        </p>
      ) : (
        <p>
         <h2> You Logged Out!! Click the Link to log back in <Link to="/login">Log In</Link> </h2>
          <img src={imageMovie} />
        </p>
      )}
    </>
  );
};

export default Home;