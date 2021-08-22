import React from "react";
import PersonHeader from "../components/headerPerson";
import SamplePerson from "./samplePeopleData";
import { MemoryRouter } from "react-router";

export default {
  title: "People Details Page/PersonHeader",
  component: PersonHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <PersonHeader person={SamplePerson} />;

Basic.storyName = "Default";
