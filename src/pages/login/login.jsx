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
