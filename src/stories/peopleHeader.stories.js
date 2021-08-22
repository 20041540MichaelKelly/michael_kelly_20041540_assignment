import React from "react";
import PeopleHeader from "../components/headerPeopleList";
import { MemoryRouter } from "react-router";

export default {
  title: "People Details Page/PeopleHeader",
  component: PeopleHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <PeopleHeader title="Popular People" />;

Basic.storyName = "Default";