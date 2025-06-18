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

describe("Mock server", () => {
    it('responds with the user', async () => {
        const response = await fetch('https://api.exemple.com/user')
        
        await expect(response.json()).resolves.toEqual({
            id: 'abc-123',
            firstName: 'John',
            lastName: 'Maverick',
        })
    })
})