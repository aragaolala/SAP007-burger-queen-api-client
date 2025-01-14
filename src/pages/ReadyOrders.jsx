import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from '../components/header/HeaderLogo';
import {
  DefaultTitle,
  ParagraphReadyOrders,
  ParagraphUniversal,
  OrderSummaryH2,
} from '../components/style-html-elements/elements-style';
import { GetOrders, OrderStatusUpdate } from '../services/products';
import {
  BackgroundCard,
  DivProductKitchen,
} from '../components/modal-menu/body/MenuCardModalStyle';
import { BtnSendOrderToKitchenAndPrepareIt } from '../components/button/ButtonStyle';
import StyleBackgroundImg from '../components/img-background/style-bg-img';

function ReadyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    GetOrders().then((json) => {
      const FinishedOrders = json.filter(
        (item) => item.status === 'Finalizado',
      );
      setOrders(FinishedOrders);
    });
  }, []);

  const changeStatus = (item, index) => {
    OrderStatusUpdate(item.id, 'Entregue').then(() => {
      const updatedList = [...orders];
      updatedList.splice(index, 1);
      setOrders(updatedList);
    });
  };

  // console.log(orders);

  return (
    <>
      <StyleBackgroundImg />
      <HeaderLogo showLogOut />
      <div className="container">
        <DefaultTitle>Pedidos Prontos</DefaultTitle>
        <Link to="/hall">
          <div className="p-voltar"> Voltar</div>
        </Link>
      </div>

      <section className="container-ordersdelivered">
        {orders.map((item, index) => (
          <BackgroundCard key={item.id}>
            <DivProductKitchen>
              <OrderSummaryH2>
                Pedido:
                {item.id}
              </OrderSummaryH2>
              <ParagraphReadyOrders>
                {item.status}
                {' '}
                em:
                {new Date(item.updatedAt).toLocaleString()}
              </ParagraphReadyOrders>

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

              <div>
                <BtnSendOrderToKitchenAndPrepareIt
                  onClick={() => changeStatus(item, index)}
                  style={{ width: '30vh' }}
                >
                  {' '}
                  Entregar
                  {' '}
                </BtnSendOrderToKitchenAndPrepareIt>
              </div>
            </DivProductKitchen>
          </BackgroundCard>
        ))}
      </section>
    </>
  );
}

export default ReadyOrders;
