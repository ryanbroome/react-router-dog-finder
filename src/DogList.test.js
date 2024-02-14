import React from "react";
import DogList from "./DogList";
import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const dogs = App.defaultProps.dogs;

// basic tests
it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <DogList dogs={dogs} />
    </MemoryRouter>
  );
});
