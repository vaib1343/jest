import { render, screen } from "@testing-library/react";
import CounterTwo from "./counter-two";
import user from "@testing-library/user-event";

describe("Counter two component", () => {
  test("render correctly", () => {
    render(<CounterTwo count={0} />);
    const headingEle = screen.getByRole("heading", {
      name: "Counter Two",
    });
    expect(headingEle).toBeInTheDocument();
  });

  test("render with handlers", async () => {
    user.setup();
    const increment = jest.fn();
    const decrement = jest.fn();
    render(
      <CounterTwo count={0} increment={increment} decrement={decrement} />
    );
    const incrementEle = screen.getByRole("button", {
      name: "Increment",
    });
    const decrementEle = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(incrementEle);
    await user.click(decrementEle);
    expect(increment).toHaveBeenCalledTimes(1);
    expect(decrement).toHaveBeenCalledTimes(1);
  });
});
