import React from "react";
import "@testing-library/jest-dom";
import Signup from '../../components/Signup'
import PatchNotes from '../../components/PatchNotes'
import SoloChampion from '../../components/SoloChampion'
import Items from '../../components/ItemBrowser'
import Login from '../../components/Login'
import Dashboard from '../../components/Dashboard'
import Navbar from '../../components/Navbar'
import LoginForm from '../../components/Login'
import Profile from '../../components/Profile'
import ChampionsBrowser from '../../components/ChampionsBrowser'
import { AuthProvider } from '../../contexts/auth'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

const Providers = ({ children }) => {
    return children;
};

// re-export everything
export * from "@testing-library/react";
const customRender = (ui, options = {}) =>
    render(ui, { wrapper: Providers, ...options });
// override render method
export { customRender as render };


describe("patch notes page", () => {
    it("should render", () => {
        render(<PatchNotes />);
    });
});

describe("sign up page", () => {
    it("should render", () => {
        render(<AuthProvider><Signup /></AuthProvider>);
    });
});
describe("soloChampion page", () => {
    it("should render", () => {
        render(<AuthProvider><SoloChampion /></AuthProvider>);
    });
});

describe("profile page", () => {
    it("should render", () => {
        render(<AuthProvider><Profile /></AuthProvider>);
    });
});

describe("login page", () => {
    it("should render", () => {
        render(<Login />);
    });
});

describe("items page", () => {
    it("should render", () => {
        render(<Items />);
    });
});

describe("navbar page", () => {
    it("should render", () => {
        render(<Navbar />);
    });
});

describe("dashboard page", () => {
    it("should render", () => {
        render(<Dashboard />);
    });
});

describe("soloChampion page", () => {
    it("should render", () => {
        render(<LoginForm />);
    });
});

describe("cahmpion page", () => {
    it("should render", () => {
        render(<ChampionsBrowser />);
    });
});
