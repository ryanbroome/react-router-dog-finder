import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

// smoke test
it("renders without crashing", function () {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
});
