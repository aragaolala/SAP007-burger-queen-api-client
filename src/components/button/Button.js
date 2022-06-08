import React from 'react';
import { Container } from './ButtonStyle';

/* eslint-disable */
const Button = ({children, ...props}) => {
    const variant = props.className ? props.className : "";
    const btnComponent = `btn-class ${variant}`;

    return (
        <Container {...props} className={btnComponent}>
           {children}
        </Container>
    )
};

export default Button
