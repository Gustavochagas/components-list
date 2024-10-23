import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { Button } from ".";

describe("Button component", () => {
  test("Should button render with correct text", () => {
    render(<Button>Teste</Button>);
    expect(screen.getByText("Teste")).toBeInTheDocument();
    expect(screen.getByText("Teste").className).toContain(
      "bg-red-100 hover:bg-red-200 focus:ring focus:ring-red-200 text-black"
    );
  });

  test("Should button render with correct variant", () => {
    render(<Button variant="secondary">Teste</Button>);
    expect(screen.getByText("Teste").className).toContain(
      "bg-white-100 hover:bg-white-200 focus:ring focus:ring-white-200 text-black"
    );
  });
});
