import React from 'react';
import { BackgroundCardMenuAndOrder, DivProduct } from './MenuCardModalStyle';
import MenuToggleBtn from './MenuToggleBtn';

/* eslint-disable */

// modal do cardápio
function MenuCardModal({ itens, showCard, callback }) {
  return (
    <div className="container container-modal-menu">
      <BackgroundCardMenuAndOrder
        style={{ display: showCard ? "block" : "none" }}
      >
        {itens.map((item) => (
          <DivProduct key={item.id}>
            <p className="p-product">
              {" "}
              {item.name.includes("Hambúrguer") ? null : item.name}{" "}
            </p>
            <p className="p-product">{item.flavor}</p>
            <p className="p-product">{item.complement}</p>
            <p className="p-product">
              {" "}
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

/*
Listas e Keys

listas:
nós usamos a função map() para receber um array de números e dobrar o valor de 
cada um deles. Atribuímos o novo array retornado pela função map() para a variável doubled
e imprime no console:

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

Esse código imprime [2, 4, 6, 8, 10] no console.

--------------------------------

- key é um atributo string especial que você precisa definir ao criar listas de elementos.

- A melhor forma de escolher uma chave é usar uma string que identifica unicamente um
item da lista dentre os demais. Na maioria das vezes você usaria IDs de seus dados como chave:

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

- keys = As chaves ajudam o React a identificar quais itens sofreram alterações, 
foram adicionados ou removidos. As chaves devem ser atribuídas aos elementos dentro do
array para dar uma identidade estável aos elementos:

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

https://pt-br.reactjs.org/docs/lists-and-keys.html
*/