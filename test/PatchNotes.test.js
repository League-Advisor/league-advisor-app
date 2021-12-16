import { render, getByTestId, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'react'
import PatchNotes from '../components/PatchNotes'


const Providers = ({ children }) => {
    return children;
};

const customRender = (ui, options = {}) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

describe("PatchNotes", () => {
    it("should render the heading", () => {

        render(<PatchNotes />);

        expect(getByTestId(document.documentElement, "load"),).toBeInTheDocument();
    });
});

