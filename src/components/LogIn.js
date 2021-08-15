import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../test-credentials";
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import FormHelperText from '@material-ui/core/FormHelperText';

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


const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
     <Card className={classes.root}>
      <CardContent className={classes.withoutLabel}>
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
        <div>
        <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="password" name="password"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
         {/* <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />  */}
        </div>
        
            
        <button
                        style={{
                        width: 100,
                        marginTop: 20,
                        height: 40,
                        alignSelf: "center",
                        background: "#039BE5",
                        color: "white"
                    }}type="submit">Submit</button>
                    
                    
      </form>
      </CardContent>
      </Card>
      
      
      
      {/* <form onSubmit={handleSubmit}>
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
      </form>
      <div>
            <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large">
                <h3 class="uk-card-title uk-text-center">Please enter details below</h3>
                <form action="/signup" method="POST">
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: user"></span> <input class="uk-input uk-form-large" type="text"
                                                                                           name="firstName" />
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: user"></span> <input class="uk-input uk-form-large" type="text"
                                                                                           name="lastName" />
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: mail"></span> <input class="uk-input uk-form-large" type="text"
                                                                                           name="email" />
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: lock"></span> <input class="uk-input uk-form-large"
                                                                                           type="password" name="password" />
                        </div>
                    </div>
                    <div class="uk-margin">
                        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Sign up</button>
                    </div>
                </form>
                
            </div>
        </div> */}
           
    </>
  );
};

export default LogIn;