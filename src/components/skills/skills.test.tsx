import { screen, render, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills component", () => {
  const skills = ["CSS", "JS", "HTML"];
  it("should render skill component", () => {
    render(<Skills skills={skills} />);
    const listEle = screen.getByRole("list");
    expect(listEle).toBeInTheDocument();
  });

  it("render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemEle = screen.getAllByRole("listitem");
    expect(listItemEle).toHaveLength(skills.length);
  });

  it("render login button", () => {
    render(<Skills skills={skills} />);
    const loginEle = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginEle).toBeInTheDocument();
  });

  it("should not render start learning button", () => {
    render(<Skills skills={skills} />);
    const learningEle = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(learningEle).not.toBeInTheDocument();
  });

  it("should render start learning button", async () => {
    const { container } = render(<Skills skills={skills} />);
    const learningEle = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    // screen.debug();
    // logRoles(container)
    expect(learningEle).toBeInTheDocument();
  });
});
