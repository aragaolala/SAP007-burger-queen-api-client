import React from 'react';
import img from '../../images/logo3.png';
import { Container } from './HeaderLogoStyle';
import { Logout } from '../logout/Logout';

/* eslint-disable */
function HeaderLogo({ showLogOut }) {
  const iconLogOut = <Logout />;

  return (
    <Container className="container">
      <img className="logo" src={img} alt="Logo Brasa Burguer" />
      {showLogOut ? iconLogOut : null}
    </Container>
  );
}

export default HeaderLogo;

/*
inconLogout recebe o componente Logout - que tem a condiçao: se o localStorage estiver limpo,
volta para a página de login, else retorna o ícone de logout no cabeçalho. 
Então, o showLogOut: se o localStorage esiver recebendo o token do funcionário, isso é
o valor do iconLogOut, mostra o ícone, do contrário fica null, vazio.

*/