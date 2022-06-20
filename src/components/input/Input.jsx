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

/*
When you are creating a form in Html pages, 
You will create a label and input that bind together as seen below

<label for="name">Name</label>
<input id="name" type="text" />

Normalmente, os rótulos são vinculados ao texto de entrada usando o atributo for. 
O ID de controle de entrada corresponde ao atributo do rótulo. Isso se aplica 
a caixas de seleção, rádio e controles de seleção.

React has no for property for labels. It defined the htmlFor attribute.

https://www.cloudhadoop.com/react-label-for-attribute/

*/