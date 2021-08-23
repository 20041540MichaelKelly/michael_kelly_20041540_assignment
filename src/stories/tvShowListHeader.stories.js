import React from "react";
import TvShowsHeader from "../components/headerTvShowList";
import { MemoryRouter } from "react-router";

export default {
  title: "TV Details Page/TvShowsHeader",
  component: TvShowsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvShowsHeader title="Tv Shows List" />;

Basic.storyName = "Default";