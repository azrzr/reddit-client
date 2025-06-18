import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import App from "./App";

describe("App", () => {
    it("contains the header", () => {
        render(<App />);
        const text = screen.getByText(/Vite \+ React/i);

        expect(text.textContent).toBe("Vite + React")

    })
})