import React from "react";
import Nav from "./Nav";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// basic tests
it("renders without crashing", function () {
  const dogNames = ["testDog"];
  render(
    <MemoryRouter>
      <Nav dogNames={dogNames} />
    </MemoryRouter>
  );
});
