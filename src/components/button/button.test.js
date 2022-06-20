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

/*
mockImplementation(fn) Aceita uma função que deve ser usada como a implementação da 
simulação (mock, em inglês). A simulação em si ainda irá gravar todas as chamadas que entram 
e instâncias que vêm dela própria – a única diferença é que a implementação também será 
executada quando a simulação é chamada. 

https://jestjs.io/docs/next/mock-function-api


*/