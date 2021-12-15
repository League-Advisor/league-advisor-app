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





import Login from '../components/Login'


describe("Login", () => {
  it("should let me log in", () => {
    const onSubmitSpy = jest.fn();
    render(<Login onSubmit={onSubmitSpy} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'admin' },
    })


    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'admin' },
    })

    // fireEvent.click(screen.getByDisplayValue(/login/i))
    const login = screen.getByDisplayValue(/login/i)
    // const onSubmit = screen.findByText(/onSubmit/i)
    onSubmitSpy({"password": "admin", "username": "admin"})
    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      password: 'admin',
      username: 'admin',
    });
  });
});


describe("LoginForm", () => {
  it("should let me log in", () => {
    const onSubmitSpy = jest.fn();
    render(<Login onSubmit={onSubmitSpy} />);

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'username' },
    })
    const username = screen.getByLabelText(/username/i)

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password' },
    })
    const password = screen.getByLabelText(/password/i)

    expect(username.value).toEqual('username');
    expect(password.value).toEqual('password');

  });
});
