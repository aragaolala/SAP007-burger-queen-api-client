import React from 'react';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import ErrorMessages from './loginValidation';
import StyleBackgroundImg from '../../components/img-background/style-bg-img';
import {
  LinkToRegisterStyle,
  ParagraphUniversal,
  LoginRegisterParagraph,
} from '../../components/style-html-elements/elements-style';
import HeaderLogo from '../../components/header/HeaderLogo';
import HeaderWelcome from '../../components/header/headerWelcome';

function LoginUser() {
  const { handleChange, handleSubmit, errors } = useForm(ErrorMessages);

  return (
    <>
      <HeaderLogo />
      <HeaderWelcome />

      <section>
        <StyleBackgroundImg />

        <form
          className="container container-login"
          action=""
          onSubmit={handleSubmit}
        >
          <Input
            className="input-group"
            label="Email:"
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="username@email.com"
          />
          <LoginRegisterParagraph>
            {errors.email && errors.email}
          </LoginRegisterParagraph>

          <Input
            label="Senha:"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Vou adivinhar: é batatinha?"
          />
          <LoginRegisterParagraph>
            {errors.password && errors.password}
          </LoginRegisterParagraph>

          <Button>Entrar</Button>
          <ParagraphUniversal>Ainda não tem uma conta?</ParagraphUniversal>
          <Link to="/register">
            <LinkToRegisterStyle>Registre-se aqui</LinkToRegisterStyle>
          </Link>
        </form>
      </section>
    </>
  );
}

export default LoginUser;

/*
https://pt-br.reactjs.org/docs/handling-events.html
Eventos React
- onChange = The onChange event handler is a prop that you can pass into JSX’s input elements.
In React, onChange is used to handle user input in real-time.

If you want to build a form in React, you need to use this event to track
the value of input elements.

https://sebhastian.com/react-onchange/

--------------------------------

- handleChange = A função handleChange() que você vê em muitos exemplos de componentes React
é uma função regular criada para lidar com alterações de entrada. É comumente passado
para a propriedade onChange de um elemento <input> para interceptar a entrada do usuário.

Quando o usuário digita em seu elemento <input>, a função do manipulador de eventos onChange
criará um objeto de evento e o passará para a função handleChange().

https://sebhastian.com/handlechange-react/

--------------------------------
https://felipegalvao.com.br/pt/blog/learn-react-events-and-forms/

*/
