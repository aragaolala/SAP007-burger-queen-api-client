import React from 'react';
import * as S from './HeaderCardStyle';

/* eslint-disable */
function HeaderCard({ onClick, children }) {
  return (
    <div className="container">
      <S.ButtonCard onClick={onClick}>

        <S.Content>{children}</S.Content>

      </S.ButtonCard>
    </div>
  );
}

export default HeaderCard;
