import React from "react";
import TvCard from "../components/tvCard";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvCard
      tvShow={SampleMovie}
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