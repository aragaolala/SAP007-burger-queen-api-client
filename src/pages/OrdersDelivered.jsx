import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../components/header/HeaderLogo';
import {
  DefaultTitle,
  ParagraphUniversal,
  OrderSummaryH2,
} from '../components/style-html-elements/elements-style';
import { GetOrders } from '../services/products';
import {
  BackgroundCard,
  DivProductKitchen,
} from '../components/modal-menu/body/MenuCardModalStyle';
import StyleBackgroundImg from '../components/img-background/style-bg-img';

function OrdersDelivered() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    GetOrders().then((json) => {
      const orderDelivered = json.filter((item) => item.status === 'Entregue');
      setOrders(orderDelivered);
    });
  }, []);
  // console.log(OrdersDelivered);

  return (
    <>
      <StyleBackgroundImg />
      <HeaderLogo showLogOut />

      <div className="container">
        <DefaultTitle>Pedidos Entregues</DefaultTitle>
        <Link to="/hall">
          <div className="p-voltar"> Voltar</div>
        </Link>
      </div>
      <div className="container-ordersdelivered">
        {orders.map((item) => (
          <div className="container-ordersdelivered" key={item.id}>
            <BackgroundCard>
              <DivProductKitchen>
                <OrderSummaryH2>
                  Status:
                  {item.status}
                </OrderSummaryH2>
                <ParagraphUniversal>
                  Nome:
                  {item.client_name}
                </ParagraphUniversal>
                <ParagraphUniversal>
                  Mesa:
                  {item.table}
                </ParagraphUniversal>
                <div className="container">
                  {item.Products.map((product) => (
                    <span key={product.id}>
                      <p>
                        {product.qtd}
                        {' '}
                        {product.name}
                        {' '}
                        {product.flavor}
                        {' '}
                        {product.complement}
                      </p>
                    </span>
                  ))}
                </div>
              </DivProductKitchen>
            </BackgroundCard>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrdersDelivered;

/*
- useEffect: A documentação oficial do React nos orienta como lidar com efeitos colaterais
em nossos componentes, então vamos utilizar o hook useEffect para lidar com estes efeitos
gerados pelo fetch(). Aqui, o side-effect é a chamada API.

- useState: Com os dados da API em mãos, precisamos conseguir armazená-los em uma
lista e depois exibi-los em tela.

Após a chamada da API, há uma mudança de estado dentro da nossa aplicação,
pois ela passa a ter os dados vindos da API que antes não tinha.
Para que possamos lidar com as mudanças de estado da nossa aplicação,
iremos usar o hook useState.

O useState, que permite a criação de estado no componente através de função e
faz o gerenciamento do estado local do componente retorna um array como resultado.
Por isso, é possível fazermos uma desestruturação para receber partes desse retorno.
O array de retorno possui dois índices. O primeiro valor deste array é uma variável
que guarda o estado em si, que chamamos de repositorio (orders aqui, linha 17).
Já o segundo valor é uma variável que é uma função, e é através dela que faremos
as atualizações do valor do nosso estado, usamos setRepositorio (setOrders aqu) para
nomear a nossa função, o set vem antes do nome por ser uma convenção da comunidade.

Como a nossa função setRepositorio é a responsável por alterar o estado de repositorio,
precisamos colocá-la dentro do escopo da função useEffect, porque ela é a responsável
por pegar os dados que vão modificar o estado da nossa aplicação.

https://www.alura.com.br/artigos/react-hooks?gclid=Cj0KCQjwkruVBhCHARIsACVIiOzdL7KQJATbTcpv8pJ8cTN8zcAvV_QcPcgqvq2vLK6pOA2773idYQUaAqL7EALw_wcB
*/
