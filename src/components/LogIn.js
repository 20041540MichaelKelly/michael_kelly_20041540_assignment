import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../test-credentials";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '25%',
        marginTop: '20ch',
        marginLeft: '35%',
      },
    margin: {
      margin: theme.spacing(80),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));
  // const errorMessage = '' 
  // const handleClick = () => {
  //   errorMessage"Example error message!")
  // }
  



const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try{ 
    firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
    .catch(error => {   
       alert(error.message);
        
     })
   }catch(err){
    <Alert severity="error">error</Alert>
     alert(err);
   }

  };
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/movies" />;
  }

  return (
    <>
     <Card className={classes.root}>
     <CardContent>
      <h1>Log In</h1>
     
      <form onSubmit={handleSubmit}>
      <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="email" name="email" placeholder="Email"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="password" name="password" required
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <CardActions>   
        <button
            style={{
            width: 100,            
            height: 40,
            alignSelf: "center",
            background: "#039BE5",
            color: "white"
            }}type="submit">Submit</button>
          </CardActions>                   
      </form>
      </CardContent>
      </Card>
    </>
  );
};

export default LogIn;