import React from "react";
import { render, screen } from "../test-utils";
import HomePage from "../../pages/index";
import "@testing-library/jest-dom";

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