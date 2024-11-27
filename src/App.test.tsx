import { render } from "@testing-library/react";
import App from "./App";

it("should match the snapshot", () => {
  const result = render(<App />);
  expect(result.container).toMatchSnapshot();
});

it("should contain the welcome message", () => {
  const { getByText } = render(<App />);

  const welcomeMessage = getByText("Let's get started!");
  expect(welcomeMessage).toBeInTheDocument();
});
