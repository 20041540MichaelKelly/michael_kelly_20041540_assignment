import React from "react";
import Signup from "../components/SignUp";
import SampleUser from "./sampleUserData";
import { MemoryRouter } from "react-router";
import  { AuthProvider }  from "../components/Auth";


export default {
  title: "SignUp Page/SignUp",
  component: Signup,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <AuthProvider>{Story()}</AuthProvider>,
  ],
};

export const Basic = () => <Signup user={SampleUser} />;

Basic.storyName = "Default";