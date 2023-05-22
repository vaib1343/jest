import { render, screen } from "@testing-library/react";
import Counter from "./counter";
import user from "@testing-library/user-event";

describe("Counter Component", () => {
  test("Should render increment button", () => {
    render(<Counter />);
    const buttonEle = screen.getByRole("button", {
      name: "Increment",
    });
    const headingEle = screen.getByRole("heading");
    expect(buttonEle).toBeInTheDocument();
    expect(headingEle).toBeInTheDocument();
  });

  test("shoud render counter 0", () => {
    render(<Counter />);
    const headingEle = screen.getByRole("heading");
    expect(headingEle).toHaveTextContent("0");
  });

  test("render count 1", async () => {
    user.setup();
    render(<Counter />);
    const buttonEle = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(buttonEle);
    const headingEle = screen.getByRole("heading");
    expect(headingEle).toHaveTextContent("1");
  });

  test("should render count 2", async () => {
    user.setup();
    render(<Counter />);
    const buttonEle = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(buttonEle);
    const headingEle = screen.getByRole("heading");
    expect(headingEle).toHaveTextContent("2");
  });

  test("render count 10 after clicking set button", async () => {
    user.setup();
    render(<Counter />);
    const inputEle = screen.getByRole("spinbutton");
    await user.type(inputEle, "10");
    expect(inputEle).toHaveValue(10);
    const buttonEle = screen.getByRole("button", {
      name: "set",
    });
    await user.click(buttonEle);
    const headingEle = screen.getByRole("heading");
    expect(headingEle).toHaveTextContent("10");
  });

  test("check focus", async () => {
    user.setup();
    render(<Counter />);
    const setAmountButton = screen.getByRole("button", {
      name: "set",
    });
    const setAmountInput = screen.getByRole("spinbutton");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(setAmountInput).toHaveFocus();
    await user.tab();
    expect(setAmountButton).toHaveFocus();
  });
});
