import React, {useState} from "react";
import { Redirect } from "react-router-dom";
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
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';



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
  
const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);    
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);      
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  const classes = useStyles();

  if (currentUser) {
      return <Redirect to="/dashboard" />;
  }

  
  return (
    
    <>
    <Card className={classes.root}>
     <CardContent>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <InputLabel htmlFor="input-with-icon-adornment">First Name</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="fName" name="fName"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <InputLabel htmlFor="input-with-icon-adornment">Last Name</InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="lName" name="lName"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      
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
          type="password" name="password"
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
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <label for="email">Email</label>
//         <input type="email" name="email" placeholder="Email" />
//         <label for="password">Password</label>
//         <input type="password" name="password" placeholder="Password" />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

export default SignUp;