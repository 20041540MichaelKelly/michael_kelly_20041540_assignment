import React from "react";
import LoginHeader from "../components/loginHeader";
import SampleUser from "./sampleUserData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Login Details Page/LoginHeader",
  component: LoginHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <LoginHeader user={SampleUser} />;

Basic.storyName = "Default";
