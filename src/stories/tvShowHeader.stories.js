import React from "react";
import TvShowHeader from "../components/headerTvShowList";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Home Page/TvShowPageHeader",
  component: TvShowHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => <TvShowHeader title="Discover Tv Shows" />;

Basic.storyName = "Default";