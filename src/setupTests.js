// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, getAllByTestId } from "@testing-library/react";
import Episodes from "./components/Episodes";

test("render episodes from API"),
  () => {
    const { getAllByTestId, rerender } = render(<Episodes images={[]} />);

    expect(getAllByTestId(/episode images/i)).toHaveLength(0);

    rerender(<Episodes images={[]} />);

    expect(getAllByTestId(/episode images/i)).toHaveLength(8);
  };
