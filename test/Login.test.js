import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as React from 'react'
import { useAuth } from '../contexts/auth'
import userEvent from '@testing-library/user-event'



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




describe("LoginRendering", () => {
  it("should render", () => {
    const onSubmitSpy = jest.fn();
    render(<Login onSubmit={onSubmitSpy} />);

    const video = screen.findByTitle(/video/i)

    const div = screen.findByTitle(/div/i)

    const form = screen.findByTitle(/form/i)

    const input = screen.findByTitle(/input/i)

    const image = screen.findByTitle(/Image/i)

    const p = screen.findByTitle(/p/i)

    const h4 = screen.findByTitle(/h4/i)


    expect(video).toBeInTheDocument
    expect(div).toBeInTheDocument
    expect(form).toBeInTheDocument
    expect(input).toBeInTheDocument
    expect(image).toBeInTheDocument
    expect(p).toBeInTheDocument
    expect(h4).toBeInTheDocument

  });
});

describe("Login", () => {
  it("should submit on submit", () => {
    const onSubmitSpy = jest.fn();
    render(<Login onSubmit={onSubmitSpy} />);

    onSubmitSpy({ "password": "admin", "username": "admin" })

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      password: 'admin',
      username: 'admin',
    });
  });
});


describe("LoginForm", () => {
  it("should accept filling the forms", () => {
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


// describe("Login", () => {
//   it("should let me login", async () => {
//     render(<Login />)
//   userEvent.type(
//     screen.getByLabelText(/username/i),
//     'john.maverick',
//   )
//   userEvent.type(
//     screen.getByLabelText(/password/i),
//     'super-secret',
//   )
//   userEvent.click(screen.getByDisplayValue(/login/i))

//   const password = screen.getByLabelText(/password/i)
//   // Assert meaningful error message shown to the user
//   expect(password).toBeInTheDocument()
//   });
// });



import renderer from 'react-test-renderer';


it('Login renders correctly', () => {
  const login = renderer
    .create(<Login />)
    .toJSON();
  expect(login).toMatchSnapshot();
});