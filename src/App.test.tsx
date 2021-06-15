import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("render App component", () => {
    render(<App />);
    expect(screen.getByText(/STATISTIC/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search.../i)).toBeInTheDocument();
  });

  it("onChange search input", () => {
    render(<App />);
    expect(screen.queryByDisplayValue("qwerty")).not.toBeInTheDocument();
    userEvent.type(screen.getByPlaceholderText("Search..."), "qwerty");
    expect(screen.getByDisplayValue("qwerty")).toBeTruthy();
  });
});
