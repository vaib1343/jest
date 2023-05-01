import Greeting from "./greet"
import { render, screen } from "@testing-library/react"



test("Greet component initial render xyz", () => {
    render(<Greeting />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
})

test("Greet render with the name", () => {
    render(<Greeting name="vaibhav" />)
    const textElement = screen.getByText("Hello vaibhav");
    expect(textElement).toBeInTheDocument()
})