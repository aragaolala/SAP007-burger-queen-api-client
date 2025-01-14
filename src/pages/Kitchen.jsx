import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetOrders, OrderStatusUpdate } from '../services/products';
import HeaderLogo from '../components/header/HeaderLogo';
import { BackgroundCard } from '../components/modal-menu/body/MenuCardModalStyle';
import { ParagraphOrderKitchen } from '../components/style-html-elements/elements-style';
import {
  BtnSendOrderToKitchenAndPrepareIt,
  BtnKitchenFinishOrder,
  ButtonsHallSeeOrders,
} from '../components/button/ButtonStyle';
import StyleBackgroundImg from '../components/img-background/style-bg-img';
import HeaderWelcome from '../components/header/headerWelcome';
// import ReadyOrders from "./ReadyOrders";

/* eslint-disable */
function Kitchen() {
  const [kitchen, setKitchen] = useState([]);

  useEffect(() => {
    GetOrders().then((json) => {
      json.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );

      const updateItems = json.map((item) => {
        if (item.status === 'pending') {
          item.status = 'Pendente';
        }

        return item;
      });

      const filterArray = updateItems.filter(
        (item) => item.status !== 'Finalizado' && item.status !== 'Entregue',
      );
      setKitchen(filterArray);
    });
  }, []);

  const changeStatus = (item, option) => {
    let newState = item.status;
    if (item.status === 'Pendente' && option === 'Preparar') {
      newState = 'Preparando...';
    } else if (item.status === 'Preparando...' && option === 'Finalizar') {
      alert('Pedido enviado para o atendente');
      const newArray = kitchen.filter((pedido) => pedido.id !== item.id);
      setKitchen(newArray);
      newState = 'Finalizado';
    } else if (item.status === 'Pendente' && option === 'Finalizar') {
      alert('Eita, prepare o pedido primeiro.');
    } else {
      return;
    }

    OrderStatusUpdate(item.id, newState).then(() => {
      if (newState === 'Preparando...') {
        const updatedKitchenArray = kitchen.map((pedido) => {
          if (pedido.id === item.id) {
            pedido.status = newState;
            pedido.updatedAt = new Date();
          }
          return pedido;
        });

        setKitchen(updatedKitchenArray);
      }
    });
  };

  // pedidos prontos ---- tirei pq a chef nao pode fazer as entregas ------
  // const [readyOrder] = useState([]);
  // const alertOrderIsReady = readyOrder > 0 ? <> ({readyOrder}) </> : null;

  console.log(Kitchen);

  return (
    <>
      <StyleBackgroundImg />
      <HeaderLogo showLogOut />
      <HeaderWelcome />

      <div className="container data-ready-order-client">
        <Link to="/ordersdelivered">
          <ButtonsHallSeeOrders>Pedidos Entregues</ButtonsHallSeeOrders>
        </Link>

        {/* ---- o chef nao pode entegar o pedido, por isso tirei ---
       <Link to="/readyorders">
          <ButtonsHallSeeOrders>
            Pedidos Prontos
            {alertOrderIsReady}
          </ButtonsHallSeeOrders>{" "}
  </Link> */}

      </div>

      {kitchen.map((item) => (
        <div className="container" key={item.id}>
          <BackgroundCard>
            <ParagraphOrderKitchen>
              Solicitado:
              {' '}
              {new Date(item.createdAt).toLocaleString()}
            </ParagraphOrderKitchen>

            <ParagraphOrderKitchen style={{ fontSize: '1em', color: 'red' }}>
              Status:
              {' '}
              {item.status}
            </ParagraphOrderKitchen>
            <ParagraphOrderKitchen>
              Nome:
              {' '}
              {item.client_name}
            </ParagraphOrderKitchen>
            <ParagraphOrderKitchen>
              Mesa:
              {item.table}
            </ParagraphOrderKitchen>

            <div className="container">
              {item.Products.map((product) => (
                <span key={product.id}>
                  <p className="p-comanda">
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

            <div className="div-btn-prepare-finish-order">
              <BtnSendOrderToKitchenAndPrepareIt
                onClick={() => changeStatus(item, 'Preparar')}
              >
                {' '}
                Preparar
                {' '}
              </BtnSendOrderToKitchenAndPrepareIt>
              <BtnKitchenFinishOrder
                onClick={() => changeStatus(item, 'Finalizar')}
              >
                {' '}
                Finalizar
                {' '}
              </BtnKitchenFinishOrder>
            </div>
          </BackgroundCard>
        </div>
      ))}
    </>
  );
}

export default Kitchen;
