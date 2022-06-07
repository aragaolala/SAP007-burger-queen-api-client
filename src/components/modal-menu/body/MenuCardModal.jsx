import React from 'react';
import { BackgroundCardMenuAndOrder, DivProduct } from './MenuCardModalStyle';
import MenuToggleBtn from './MenuToggleBtn';

/* eslint-disable */

// modal do cardápio
function MenuCardModal({ itens, showCard, callback }) {
  return (
    <div className="container container-modal-menu">

      <BackgroundCardMenuAndOrder style={{ display: (showCard ? 'block' : 'none') }}>

        {itens.map((item) => (
          <DivProduct key={item.id}>
            <p className="p-product">
              {' '}
              {item.name.includes('Hambúrguer') ? null : item.name}
              {' '}
            </p>
            <p className="p-product">{item.flavor}</p>
            <p className="p-product">{item.complement}</p>
            <p className="p-product">
              {' '}
              R$
              {item.price}
            </p>

            <MenuToggleBtn
              callback={callback}
              idProduct={item.id}
              nameProduct={item.name}
              price={item.price}
              quantityProduct={item.quantity}
              flavor={item.flavor}
              complement={item.complement}
            />
          </DivProduct>
        ))}
      </BackgroundCardMenuAndOrder>
    </div>
  );
}

export default MenuCardModal;
