import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Page from "./page";

describe("Page component", () => {
  it("renders without crashing", () => {
    render(<Page />);
  });

  it("starts timer when button is clicked", async () => {
    const { getByText } = render(<Page />);
    const startButton = getByText("start"); // Adjusted to lowercase 'start'

    fireEvent.click(startButton);

    await waitFor(() => {
      expect(getByText(/TimePassed/i)).toBeInTheDocument(); // Adjusted to lowercase 'TimePassed'
    });
  });

  it("displays accurate time passed", async () => {
    jest.useFakeTimers();

    const { getByText } = render(<Page />);
    const startButton = getByText("start"); // Adjusted to lowercase 'start'

    fireEvent.click(startButton);

    jest.advanceTimersByTime(3000); // Advance time by 3 seconds

    await waitFor(() => {
      expect(getByText("TimePassed: 3.000")).toBeInTheDocument(); // Adjusted to remove 'seconds'
    });
  });
});
