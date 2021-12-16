import { render, getByText, getByTestId } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'react'
import Navbar from '../components/Navbar'
import { AuthProvider } from '../contexts/auth'



const Providers = ({ children }) => {
    return children;
};

const customRender = (ui, options = {}) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };


describe("Navbar", () => {
    it("render profile", () => {
        render(<AuthProvider ><Navbar /></AuthProvider>);
        const { asFragment } = render(<button>Profile</button>);
        const fragmentElement = asFragment().firstChild;
        const a = getByText(fragmentElement, 'Profile');
        expect(a).not.toBe(null);


    });
});

describe("Navbar", () => {
    it("svg test", () => {
        render(<AuthProvider ><Navbar /></AuthProvider>);
        expect(getByTestId(document.documentElement, "icon"),).toBeInTheDocument();

    });
});

describe("Navbar", () => {
    it("unorder list", () => {
        render(<AuthProvider ><Navbar /></AuthProvider>);
        expect(getByTestId(document.documentElement, "list"),).toBeInTheDocument();

    });
});
