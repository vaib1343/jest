import { render, screen } from "@testing-library/react";
import Application from "./application";

describe("Application Component", () => {
  it("component should render", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      // name: 'Job application form'
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      // name: "Section 1"
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const imageEle = screen.getByAltText("a person with a laptop");
    expect(imageEle).toBeInTheDocument();

    const closeEle = screen.getByTitle("close");
    expect(closeEle).toBeInTheDocument();

    const paraEle = screen.getByText("All fields are mandatory");
    expect(paraEle).toBeInTheDocument();

    const nameEle = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameEle).toBeInTheDocument();

    const bioEle = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEle).toBeInTheDocument();

    const jobLocation = screen.getByRole("combobox");
    expect(jobLocation).toBeInTheDocument();

    const termsEle = screen.getByRole("checkbox");
    expect(termsEle).toBeInTheDocument();

    const submitEle = screen.getByRole("button");
    expect(submitEle).toBeInTheDocument();
  });
});
