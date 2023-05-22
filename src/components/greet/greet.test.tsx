import Greeting from "./greet";
import { render, screen } from "@testing-library/react";

describe("Greet component", () => {
  test("Greet component initial render", () => {
    render(<Greeting />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("Greet render with the name", () => {
    render(<Greeting name="vaibhav" />);
    const textElement = screen.getByText("Hello vaibhav");
    expect(textElement).toBeInTheDocument();
  });
});
