import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../test-credentials";
import { Alert } from "@material-ui/lab";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  if (!currentUser) {
    Alert('You are not user');
    return <Redirect to="/" />;
  }
  
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is the dashboard, if you can see this you're lucky and logged in.</p>
      <button onClick={() => firebaseConfig.auth().signOut()}>Sign out</button>
    </div>
  );
};

export default Dashboard;