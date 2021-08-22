import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig,  { signInWithGoogle }  from "../test-credentials";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Snackbar from "@material-ui/core/Snackbar"; 
import MuiAlert from "@material-ui/lab/Alert";
import { Typography } from "@material-ui/core";


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
    snack: {
      width: "50%",
      "& > * ": {
        width: "100%",
      },
    },
  }));

   
const LogIn = () => {
  const [open, setOpen] = React.useState(false);  //NEW
  
  const handleSnackClose = (event) => {  
    setOpen(false);
  };   
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { email, password } = e.target.elements;
    
    firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
    .catch(function (error) {
      setOpen(true);
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error" + error);
    })
    
  
  };
  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    
    return <Redirect to="/movies" />;
  }
 
  return (
    <>
    <Typography><h1>Welcome to TMDB</h1></Typography>
    <Card className={classes.root}>
    <Snackbar
        className={classes.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <MuiAlert
          severity="error"
          variant="filled"
          onClose={handleSnackClose}
        >
         <h2>Incorrect User Input</h2>
        </MuiAlert>
      </Snackbar>
     <CardContent>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
      <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="email" name="email" placeholder="Email"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="password" name="password" required
          startAdornment={
            <InputAdornment position="start">
              <LockIcon />
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