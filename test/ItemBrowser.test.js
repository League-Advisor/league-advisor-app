import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'react'

const Providers = ({ children }) => {
    return children;
};

const customRender = (ui, options = {}) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

import { AuthProvider } from '../contexts/auth'


import ItemBrowser from '../components/ItemBrowser'


describe("ItemBrowser", () => {
    it("should render", () => {

        render(<AuthProvider><ItemBrowser /></AuthProvider>);

        const form = screen.findAllByTitle(/form/i)

        const tr = screen.findAllByTitle(/tr/i)

        const th = screen.findAllByTitle(/th/i)

        const image = screen.findAllByTitle(/Image/i)

        const p = screen.findAllByTitle(/p/i)

        const h4 = screen.findAllByTitle(/h4/i)

        const div = screen.findAllByTitle(/h4/i)

        expect(form[0]).toBeInTheDocument
        expect(div[0]).toBeInTheDocument
        expect(tr[0]).toBeInTheDocument
        expect(th[0]).toBeInTheDocument
        expect(image[0]).toBeInTheDocument
        expect(p[0]).toBeInTheDocument
        expect(h4[0]).toBeInTheDocument

    });
});