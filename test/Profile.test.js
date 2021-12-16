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


import Profile from '../components/Profile'
import { AuthProvider } from '../contexts/auth'

describe("ProfileRendering", () => {
    it("should render", () => {

        render(<AuthProvider><Profile /></AuthProvider>);

        const table = screen.findAllByTitle(/table/i)

        const tr = screen.findAllByTitle(/tr/i)

        const th = screen.findAllByTitle(/th/i)

        const image = screen.findAllByTitle(/Image/i)

        const p = screen.findAllByTitle(/p/i)

        const h4 = screen.findAllByTitle(/h4/i)

        const div = screen.findAllByTitle(/h4/i)

        expect(div[0]).toBeInTheDocument
        expect(table[0]).toBeInTheDocument
        expect(tr[0]).toBeInTheDocument
        expect(th[0]).toBeInTheDocument
        expect(image[0]).toBeInTheDocument
        expect(p[0]).toBeInTheDocument
        expect(h4[0]).toBeInTheDocument

    });
});


// describe("ProfileRendering", () => {
//     it("should show user data", () => {

//         render(<AuthProvider><Profile user={true} /></AuthProvider>);

//         fireEvent.click(screen.getByText(/UPDATE/i))

//         expect('a').toBeInTheDocument()

//     });
// });