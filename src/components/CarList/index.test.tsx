import * as React from "react";
import { render, waitFor } from "@testing-library/react";
import { CarList } from ".";

describe("CarList", () => {
  // This test should pass initially
  it("should display a loading message initially", () => {
    const result = render(<CarList />);
    expect(result.getByText("Loading...")).toBeTruthy();
  });

  // This test will fail. How can we return a list of cars?
  it("should display a list of cars", async () => {
    const result = render(<CarList />);

    await waitFor(() => {
      expect(result.getByText("Ford Fiesta")).toBeTruthy();
    });
  });

  // This test will also fail.
  // How can we change the implementation to return an empty list?
  it("should display an empty message if no cars", async () => {
    const result = render(<CarList />);
    await waitFor(() => {
      expect(result.getByText("No cars found!")).toBeTruthy();
    });
  });
});
