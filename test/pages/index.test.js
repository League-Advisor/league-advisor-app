import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const Providers = ({ children }) => {
    return children;
};

const customRender = (ui, options = {}) =>
    render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };



// @jest-environment

/**
 * @jest-environment ./src/test/my-custom-environment
 */
describe("HomePage", () => {
	test('use jsdom in this test file', () => {
		const element = document.createElement('div');
		expect(element).not.toBeNull();
	  });
});