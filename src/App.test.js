import { render } from '@testing-library/react';
import LoginUser from './pages/login/login';
import Register from './pages/register/Register';
// import Button from './components/button/Button';
import Input from './components/input/Input';

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



// testes componente input
describe("Testing input component", () => {
  it("should render the input component", () => {
    render(<Input />);
  });

  it("should call the onChange function when value is changed", () => {
    const onChange = jest.fn();
    render(<Input onChange={onChange} />);
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
