import { fireEvent, render, screen } from '@testing-library/react';

import Button from './Button';
/* eslint-disable */

// testes componente botão
test("It should submit button on login screen", () => {
  const handleSubmit = jest.fn();
  render(<Button onClick={handleSubmit}>Entrar</Button>);
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  fireEvent.click(screen.getByText(/Entrar/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});

test("It should submit button on register screen", () => {
  const handleSubmit = jest.fn();
  render(<Button onClick={handleSubmit}>Cadastre-se</Button>);
  expect(handleSubmit).toHaveBeenCalledTimes(0);
  fireEvent.click(screen.getByText(/Cadastre-se/i));
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});