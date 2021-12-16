import React from "react";
import { render, screen } from "../test-utils";
import "@testing-library/jest-dom";
import Signup from '../../components/Signup'
import PatchNotes from '../../components/PatchNotes'
import SoloChampion from '../../components/SoloItem'
import Items from '../../components/ItemBrowse'
import Login from '../../components/Login'
import Dashboard from '../../components/Dashboard'
import Navbar from '../../components/Navbar'
import LoginForm from '../../components/Login'
import profile from '../../components/Profile'
import Ranked from '../../components/RankedItems'
import Champion from '../../components/championsbrowse'
import { AuthProvider } from '../../contexts/auth'
import Home from '../../pages/index'
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
        render(<AuthProvider><profile /></AuthProvider>);
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
        render(<Champion />);
    });
});

describe("ranked page", () => {
    it("should render", () => {
        render(<Ranked />);
    });
});
describe("home page", () => {
    it("home render", () => {
        render(<AuthProvider><Home /></AuthProvider>);
    });
});
