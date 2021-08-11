import * as React from "react";
import { render } from "react-dom";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth";
import { State } from "react-powerplug";
import firebase from "firebase/app";
import "firebase/auth";

import { config } from "../test-credentials";

const AnonymousAuthPage = (props) => {


   return (
    <div>
      
      <FirebaseAuthProvider {...config} firebase={firebase}>
        <div>
          Hello <div>From Auth Provider Child 1</div>
          <FirebaseAuthConsumer>
            {({ isSignedIn, firebase }) => {
              if (isSignedIn === true) {
                return (
                  <div>
                    <h2>You're signed in 🎉 </h2>
                    <button
                      onClick={() => {
                        firebase
                          .app()
                          .auth()
                          .signOut();
                      }}
                    >
                      Sign out
                    </button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <h2>You're not signed in </h2>
                    <button
                      onClick={() => {
                        firebase
                          .app()
                          .auth()
                          .signInAnonymously();
                      }}
                    >
                      Sign in anonymously
                    </button>
                    <button
                        onClick={() => {
                            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                            firebase.auth().signInWithPopup(googleAuthProvider);
                        }}
                    >
                        Sign in with Google
                    </button>
                  </div>
                );
              }
            }}
          </FirebaseAuthConsumer>
        </div>
        <div>Another div</div>
      </FirebaseAuthProvider>
    </div>
  );
};

export default AnonymousAuthPage;
// render(<App />, document.getElementById("root"));