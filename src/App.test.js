import LoginUser from './pages/login/login';
import Register from './pages/register/Register';

/* eslint-disable */
// testes login e registro
describe("Login", () => {
  it("It should be a function", () => {
    expect(typeof LoginUser).toBe("function");
  });
});

describe("Register", () => {
  it("It should be a function", () => {
    expect(typeof Register).toBe("function");
  });
});

/* veio no projeto
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); 
*/
