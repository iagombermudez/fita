import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import CreateWorkoutPage from "./CreateWorkoutPage";

describe("Create Workout Page Tests", () => {
  it("renders content", () => {
    const component = render(<CreateWorkoutPage />);
    component.getAllByText("Create workout");

    expect(component.container).toHaveTextContent("Name");
  });
});
