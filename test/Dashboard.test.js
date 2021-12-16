import { render, getByText, fireEvent, screen , useEffect} from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'react'
import Dashboard from '../components/Dashboard'
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


describe("Dashboard", () => {
    it("render Dashboard", () => {
        render(<AuthProvider ><Dashboard /></AuthProvider>);
        const { asFragment } = render(<a>Champions Browser</a>);
        const fragmentElement = asFragment().firstChild;
        const a = getByText(fragmentElement, 'Champions Browser');
        expect(a).not.toBe(null);


    });
});




