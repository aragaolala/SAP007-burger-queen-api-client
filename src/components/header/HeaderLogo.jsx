import React from 'react';
import img from '../../images/logo3.png';
import { Container } from './HeaderLogoStyle';
import { Logout } from '../logout/Logout';

/* eslint-disable */
function HeaderLogo({ showLogOut }) {
  const iconLogOut = <Logout />;

  return (
    <Container className="container">
      <img className="logo" src={img} alt="logo" />
      {showLogOut ? iconLogOut : null}
    </Container>
  );
}

export default HeaderLogo;
