import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Import this to enable `toBeInTheDocument`

function Article() {
  return <div>please pass this test</div>;
}

test("displays the text 'please pass this test'", () => {
  render(<Article />);
  screen.debug(); // This will print the rendered DOM to the console

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

export default Article;