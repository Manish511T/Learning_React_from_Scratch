import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load Button inside my contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name on the contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });
  it("Should load 2 input boxes on the  contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);
    expect(inputBoxes.length).toBe(2);
  });
});

// Test == it
