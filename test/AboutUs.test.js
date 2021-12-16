import { render, getByTestId, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'react'
import AboutUs from '../components/AboutUs'


const Providers = ({ children }) => {
    return children;
};

const customRender = (ui, options = {}) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

describe("AboutUs", () => {
    it("should render the heading", () => {
        const textToFind = " Check our awesome team members"

        render(<AboutUs />);

        expect(getByTestId(document.documentElement, "title"),).toBeInTheDocument();
    });
});








