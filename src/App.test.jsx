import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";

describe("App", () => {
    it("contains the header", () => {
        render(<App />);
        const text = screen.getByText(/Vite \+ React/i);

        expect(text.textContent).toBe("Vite + React")

    }),
    it("initialises the counter at 0", () => {
        render(<App />);
        const counter = screen.getByTestId("counter").textContent;

        expect(counter).toBe("0");
    }),
    it("increments the counter to 1 on click of the button", () => {
        render(<App />);
        const button = screen.getByRole("button");

        fireEvent.click(button);
        const counter = screen.getByTestId("counter").textContent;

        expect(counter).toBe("1");
    })
})