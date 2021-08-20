import React from "react";
import PeopleCard from "../components/peopleCard";
import SamplePerson from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Home Page/PeopleCard",
  component: PeopleCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
  ],
};
//TODO: a lot of work to be done here
export const Basic = () => {
  return (
    <PeopleCard
      person={SamplePerson}
      action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <TvCard
      movie={sampleNoPoster}
      action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Exceptional.storyName = "exception";