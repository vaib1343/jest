import { render, screen } from "@testing-library/react";
import Users from "./users";
import { server } from "../../mocks/server";
import { rest } from "msw";

describe("User component", () => {
  test("render correctly", () => {
    render(<Users />);
    const listEle = screen.getByRole("list");
    expect(listEle).toBeInTheDocument();
  });

  test("should render the list of user", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("should render an error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText("Error in fetching users");
    expect(error).toBeInTheDocument();
  });
});
