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
import { FcAddressBook } from "react-icons/fc";

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
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <>
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
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        </div>
        
        <button
                        style={{
                        width: 100,
                        height: 40,
                        alignSelf: "center",
                        background: "#039BE5",
                        color: "white"
                    }}type="submit">Submit</button>
      </form>
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
        </div>
           
    </>
  );
};

export default LogIn;