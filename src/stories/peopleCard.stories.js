import React from "react";
import PeopleCard from "../components/peopleCard";
import SamplePerson from "./samplePeopleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Home Page/PeopleCard",
  component: PeopleCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
  ],
};
console.log(SamplePerson)
//TODO: a lot of work to be done here
export const Basic = () => {
  return (
    <PeopleCard
      person={SamplePerson}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoProfile = { ...SamplePerson, profile_path: undefined };
  return (
    <PeopleCard
      person={sampleNoProfile}
    
    />
  );
};
Exceptional.storyName = "exception";