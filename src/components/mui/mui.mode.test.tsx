import MuiMode from "./mui.mode";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";

describe("MUI mode component", () => {
  test("render component correctly", () => {
    render(<MuiMode />);
    const modeEle = screen.getByRole("heading");
    expect(modeEle).toHaveTextContent("dark mode");
  });
});
