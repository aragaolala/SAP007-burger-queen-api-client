import React from 'react';
import { Container } from './ButtonStyle';

/* eslint-disable */
const Button = ({children, ...props}) => {
    const variant = props.className ? props.className : "";
    const btnComponent = `${variant}`;

    return (
        <Container {...props} className={btnComponent}>
           {children}
        </Container>
    )
};

export default Button

// props é a forma principal de comunicação entre componentes.
// ${} is just a lot cleaner to insert variable in a string
/* 
const variant: se a propriedade className for true, retorna a props.className (o estilo 
    para aquele elemento), se for false, retorna vazio.

const btnComponent: recebe as condições da const variant e é passada como o estilo a ser 
renderizado pelo className dentro do container.

children: renderização dos elementos filhos do container.


*/