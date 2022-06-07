import React from 'react';
import { Container, Label, StyleInput } from './InputStyle';

/* eslint-disable */
function Input({ label, id, ...props }) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <StyleInput id={id} {...props} />
    </Container>
  );
}

export default Input;
