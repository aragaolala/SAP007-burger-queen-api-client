import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/Register';
import Hall from './pages/Hall';
import Kitchen from './pages/Kitchen';
import ReadyOrders from './pages/ReadyOrders';
import OrdersDelivered from './pages/OrdersDelivered';
import Notfound from './pages/404page';
// import { PrivateOutlet } from "./components/PrivateRoute";

// Testando rotas privadas com componentes aninhados (nested components)
// https://blog.utsavkumar.tech/private-routes-in-react-router-v6

import { PrivateRoute } from './components/PrivateRoute';

function AllRoutesApp() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/hall"
            element={(
              <PrivateRoute permission={['atendente']}>
                <Hall />
              </PrivateRoute>
            )}
          />
          <Route
            path="/kitchen"
            element={(
              <PrivateRoute permission={['cozinheiro']}>
                <Kitchen />
              </PrivateRoute>
            )}
          />
          <Route
            path="/readyorders"
            element={(
              <PrivateRoute permission={['atendente']}>
                <ReadyOrders />
              </PrivateRoute>
            )}
          />
          <Route
            path="/ordersdelivered"
            element={(
              <PrivateRoute permission={['atendente', 'cozinheiro']}>
                <OrdersDelivered />
              </PrivateRoute>
            )}
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AllRoutesApp;

/*
BrowserRouter: é um componente responsável por informar a nossa aplicação que teremos
um roteamento de componentes, por conta disso ele ficará em volta dos componentes <Route>.
Route: componente que associa a rota ao componente. Nele temos três parâmetros: component,
path e exact.

https://www.npmjs.com/package/react-router

--------------------------------

- CORS: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
*/
