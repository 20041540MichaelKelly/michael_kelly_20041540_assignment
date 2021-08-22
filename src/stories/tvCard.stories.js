import React from "react";
import TvCard from "../components/tvCard";
import SampleTvShow from "./sampleTvShowData";
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
      tvShow={SampleTvShow}
      action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTvShow, poster_path: undefined };
  return (
    <TvCard
      tvShow={sampleNoPoster}
      action={(tvShow) => <AddToFavoritesIcon tvShow={tvShow} />}
      taging={(tvShow) => null}
    />
  );
};
Exceptional.storyName = "exception";