import React from 'react';
import { Button } from './MenuToggleBtnStyle';

/* eslint-disable */
// adicionando ou removendo itens da comanda
function MenuToggleBtn({
  callback,
  idProduct,
  nameProduct,
  price,
  quantityProduct = 0,
  flavor,
  complement,
}) {
  function AddProduct() {
    callback(
      idProduct,
      nameProduct,
      price,
      quantityProduct + 1,
      flavor,
      complement
    );
  }

  function RemoveProduct() {
    let quantity = quantityProduct;
    if (quantityProduct > 0) {
      quantity--;
    }

    callback(idProduct, nameProduct, price, flavor, complement);
  }

  const BtnAddOrRemoveQuantity = quantityProduct === 0 ? "black" : "red";
  // a quantidade é exatamente igual a 0? Se sim, o "menos" fica preto, se não fica vermelho

  return (
    <div>
      <Button onClick={RemoveProduct} style={{ color: BtnAddOrRemoveQuantity }}>
        -
      </Button>
      <Button>{quantityProduct}</Button>
      <Button onClick={AddProduct}>+</Button>
    </div>
  );
}

export default MenuToggleBtn;
