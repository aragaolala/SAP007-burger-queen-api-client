import React from 'react';
import * as S from './CheckboxRoleStyle';

/* eslint-disable */
function CheckboxRole(props) {
  return (
    <S.Container>
      <S.Label>
        <S.InputCheckboxRole type="radio" {...props} />
        {' '}
        {props.text}
        {' '}
      </S.Label>
    </S.Container>
  );
}

export default CheckboxRole;

/* The import * as name syntax imports all exported content of a javascript file.
Está importando todos os estilos do CheckboxRoleStyle.
 
{' '} --> {' '} Is used to insert a space inside your JSX while avoiding any 
side effet. Using this to insert a space does not insert any HTML tag in your code.

and {} is used to interpolate JavaScript inside your JSX.


*/