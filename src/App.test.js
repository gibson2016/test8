import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders change 6", () => {
  const { getByText } = render(<App />);
  const element = getByText(/HELLO WORLD FROM KW/i);
  expect(element).toBeInTheDocument();
});
