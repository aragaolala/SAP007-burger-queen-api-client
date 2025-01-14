import { React, useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { RenderAllProducts, PostOrders, GetOrders } from '../services/products';
import { Title } from '../components/modal-menu/header/HeaderCardStyle';
import HeaderCard from '../components/modal-menu/header/HeaderCard';
import MenuCardModal from '../components/modal-menu/body/MenuCardModal';
import {
  BackgroundCard,
  DivProduct,
} from '../components/modal-menu/body/MenuCardModalStyle';
import { ParagraphUniversal } from '../components/style-html-elements/elements-style';
import HeaderLogo from '../components/header/HeaderLogo';
import Modal from '../components/modal/Modal';
import {
  BtnSendOrderToKitchenAndPrepareIt,
  ButtonsHallSeeOrders,
  CancelOrder,
} from '../components/button/ButtonStyle';
import { ClientData } from '../components/input/InputStyle';
import breakfastImg from '../images/breakfast.png';
import burguerSimplesImg from '../images/bg-simples.png';
import burguerDuploImg from '../images/bg-duplo.png';
import drinkImg from '../images/drink.png';
import friesImg from '../images/fries.png';
import StyleBackgroundImg from '../components/img-background/style-bg-img';

function Hall() {
  const [showBreakfast, setShowBreakfast] = useState(false);
  const [showHamburguer, setShowHamburguer] = useState(false);
  const [showHamburguerDuplo, setShowHamburguerDuplo] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const [nameClient, setNameClient] = useState('');
  const [table, setTable] = useState('');
  const [order, setOrder] = useState([]);
  const [allValue, setAllValue] = useState('');
  const [setShowOrderSummary] = []; // useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [menu, setMenu] = useState([]);
  const [readyOrder, setReadyOrder] = useState([]);

  /* eslint-disable */
  useEffect(() => {
    RenderAllProducts()
      .then((json) => setMenu(json))
      .catch((error) => {
        alert(`Erro na requisição. [${error.message}]`);
      });

    GetOrders().then((json) => {
      const FinishedOrders = json.filter(
        (item) => item.status === "Finalizado"
      );
      setReadyOrder(FinishedOrders ? FinishedOrders.length : 0);
    });
  }, []);

  const handleClick = (typeProduct) => {
    if (typeProduct === "breakfast") {
      setShowBreakfast(!showBreakfast);
    }
    if (typeProduct === "hamburguer") {
      setShowHamburguer(!showHamburguer);
    }
    if (typeProduct === "drink") {
      setShowDrink(!showDrink);
    }
    if (typeProduct === "side") {
      setShowSide(!showSide);
    }
    if (typeProduct === "hamburguerDuplo") {
      setShowHamburguerDuplo(!showHamburguerDuplo);
    }
  };

  const handleChange = (e) => {
    setNameClient(e.target.value);
  };

  const handleChangeTable = (e) => {
    setTable(e.target.value);
  };

  const addOrderSummary = (
    idProduct,
    nameProduct,
    price,
    quantityProduct,
    flavor,
    complement
  ) => {
    const updatedOrder = [...order.filter((item) => item.id !== idProduct)];

    if (quantityProduct > 0) {
      updatedOrder.push({
        id: idProduct,
        quantity: quantityProduct,
        name: nameProduct,
        price,
        totalProductPrice: price * quantityProduct,
        flavor,
        complement,
      });
    }

    // console.log(addOrderSummary);

    const updatedMenu = menu.map((item) => {
      if (item.id === idProduct) {
        return { ...item, quantity: quantityProduct };
      }
      return item;
    });

    setMenu(updatedMenu);
    setOrder(updatedOrder);
    totalValue(updatedOrder);
  };

  const sendSummary = () => {
    if (nameClient !== "" && table !== "" && order.length > 0) {
      const allProducts = order.map((item) => {
        const productsArr = {
          id: item.id,
          qtd: item.quantity,
        };
        return productsArr;
      });

      PostOrders(nameClient, table, allProducts).then(() => {
        setShowModal(true);
        setShowOrderSummary;
        setNameClient("");
        setTable("");
        setMenu(
          menu.map((item) => {
            item.quantity = 0;
            return item;
          })
        );
        setOrder([]);
        setShowBreakfast(false);
        setShowHamburguer(false);
        setShowHamburguerDuplo(false);
        setShowSide(false);
        setShowDrink(false);
        window.scrollTo(0, 0);
      });
    }
  };

  const remove = (index) => {
    const updatedList = [...order];
    const deletedItems = updatedList.splice(index, 1);
    setOrder(updatedList);
    setAllValue(allValue - deletedItems[0].totalProductPrice);

    const updatedMenu = menu.map((item) => {
      if (item.id === deletedItems[0].id) {
        return { ...item, quantity: 0 };
      }
      return item;
    });
    setMenu(updatedMenu);
  };

  const totalValue = (currentOrder) => {
    let total = 0;
    currentOrder.forEach((item) => {
      total += item.totalProductPrice;
    });
    setAllValue(total);

    if (total > 0) {
      setShowOrderSummary;
    } else {
      total = 0;
    }
  };

  const confirmcancelOrder = () => {
    if (nameClient === "" || table === "") {
      setShowCancelModal(false);
    } else {
      setShowCancelModal(true);
    }
  };

  const cancelOrder = () => {
    setShowCancelModal(false);
    setShowOrderSummary;
  };

  const msgError =
    nameClient === "" || table === "" ? (
      <p className="p-comanda">
        <b>Por favor, preencha os dados do Cliente</b>
      </p>
    ) : null;

  const alertOrderIsReady = readyOrder > 0 ? <> ({readyOrder}) </> : null;

  return (
    <>
      <StyleBackgroundImg />
      <HeaderLogo showLogOut />

      {/* -----------------botões pedidos prontos e entregues ---------------------*/}

      <div className="container-client-and-btn">
        <div className="container data-ready-order-client">
          <Link to="/readyorders">
            <ButtonsHallSeeOrders>
              {" "}
              Pedidos Prontos
              {alertOrderIsReady}
            </ButtonsHallSeeOrders>{" "}
          </Link>

          <Link to="/ordersdelivered">
            <ButtonsHallSeeOrders>Pedidos Entregues</ButtonsHallSeeOrders>
          </Link>

          {/* <div className="container data-ready-order-client"> */}
          <ClientData
            placeholder="Digite o nome do cliente:"
            label="Nome do Cliente"
            id="name"
            className="input"
            name="nameClient"
            type="text"
            onChange={handleChange}
            value={nameClient}
          />

          <ClientData
            placeholder="Digite o nº da mesa:"
            label="Mesa do Cliente"
            className="input"
            name="tableClient"
            type="number"
            onChange={handleChangeTable}
            value={table}
            step="any"
            min="0"
          />
        </div>
        {/* -----------------pedido do cliente---------------------*/}
        {/* {showResume ? (    -- mudando para comanda fixa --- */}
        <div className="container data-ready-order-client">
          <div className="order-summary">
            <BackgroundCard>
              <h3>Comanda</h3>
              {msgError}

              <ParagraphUniversal style={{ color: "white" }}>
                Cliente:
                {nameClient}
              </ParagraphUniversal>
              <ParagraphUniversal style={{ color: "white" }}>
                 Mesa:
                {table}
              </ParagraphUniversal>

              {order.map((item, index) => (
                <DivProduct key={item.id}>
                 <p>
                    Qtd: {item.quantity} x {item.price}{" "}
                  </p>
                  <p> {item.name} </p>
                  <p>{item.flavor}</p>
                  <p>{item.complement}</p>
                  <p>
                    {" "}
                    R$
                    {item.totalProductPrice}
                  </p>

                  <MdDelete
                    onClick={() => remove(index)}
                    style={{ color: "#d13030", cursor: "pointer" }}
                  />
                </DivProduct>
              ))}
              <ParagraphUniversal style={{ color: "white" }}>
                Total: R$
                {allValue}
              </ParagraphUniversal>

              <div className="btn-send-cancelOrder">
                <CancelOrder onClick={() => confirmcancelOrder()}>
                  Cancelar
                </CancelOrder>
                <BtnSendOrderToKitchenAndPrepareIt onClick={() => sendSummary()}>
                  Enviar
                </BtnSendOrderToKitchenAndPrepareIt>
              </div>
            </BackgroundCard>
          </div>
        </div>
        {/* ) : null */}
      </div>

      {/* ----------------- cardápio ---------------------*/}

      <div className="container-teste">
        <HeaderCard onClick={() => handleClick("breakfast")}>
          <Title>Café da Manhã</Title>

          <img src={breakfastImg} alt="cafe-da-manha" className="img-capa" />
        </HeaderCard>

        <MenuCardModal
          itens={menu.filter((item) => item.type === "breakfast")}
          showCard={showBreakfast}
          callback={addOrderSummary}
        />

        <HeaderCard onClick={() => handleClick("hamburguer")}>
          <Title>Burguer Simples</Title>
          <img
            src={burguerSimplesImg}
            alt="burguer-simples"
            className="img-capa"
          />
        </HeaderCard>

        <MenuCardModal
          itens={menu.filter((item) => item.name === "Hambúrguer simples")}
          showCard={showHamburguer}
          callback={addOrderSummary}
        />

        <HeaderCard onClick={() => handleClick("hamburguerDuplo")}>
          <Title>Burgão Duplo</Title>
          <img src={burguerDuploImg} alt="burguer-duplo" className="img-capa" />
        </HeaderCard>

        <MenuCardModal
          itens={menu.filter((item) => item.name === "Hambúrguer duplo")}
          showCard={showHamburguerDuplo}
          callback={addOrderSummary}
        />

        <HeaderCard onClick={() => handleClick("drink")}>
          <Title>Bebidas</Title>
          <img src={drinkImg} alt="bebidas" className="img-capa" />
        </HeaderCard>

        <MenuCardModal
          itens={menu.filter((item) => item.sub_type === "drinks")}
          showCard={showDrink}
          callback={addOrderSummary}
        />

        <HeaderCard onClick={() => handleClick("side")}>
          <Title>Acompanhamento</Title>
          <img src={friesImg} alt="acompanhamento" className="img-capa" />
        </HeaderCard>
        <MenuCardModal
          itens={menu.filter((item) => item.sub_type === "side")}
          showCard={showSide}
          callback={addOrderSummary}
        />
      </div>

      {/* ------ modais pedidos enviados com sucesso ou para cancelar ------ */}

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>Uhuul, pedido enviado com sucesso.</p>
      </Modal>

      <Modal showModal={showCancelModal} setShowModal={setShowCancelModal}>
        <p>Cancelar esse pedido?</p>
        <div style={{ textAlign: "center" }}>
          <CancelOrder style={{ width: "150px" }} onClick={() => cancelOrder()}>
            Cancelar
          </CancelOrder>
        </div>
      </Modal>
    </>
  );
}

export default Hall;
