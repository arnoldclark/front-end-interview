import { render } from "@testing-library/react";
import App from "./App";

it("should match the snapshot", () => {
  const result = render(<App />);
  expect(result.container).toMatchSnapshot();
});
