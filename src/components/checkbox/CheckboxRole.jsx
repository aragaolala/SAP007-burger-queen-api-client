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
