import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/* eslint-disable */

export function PrivateRoute({ children, permission }) {
  const loginStatus = localStorage.getItem('token');
  const rolePermission = permission.includes(localStorage.getItem('role'));
  const { pathname } = useLocation();
  // const navigate = useNavigate();
  console.log({ pathname });
  console.log(rolePermission, children, permission, localStorage.getItem('role'));
  if (loginStatus && rolePermission) {
    return children;
  } if (loginStatus && !rolePermission) {
    return window.history.go(-1);
  }
  return <Navigate to="/login" state={{ from: pathname }} replace />;
}

/* na linha 14:
  return navigate(-1)  -- troquei por window.history.go(-1)
  https://www.geeksforgeeks.org/how-to-make-browser-to-go-back-to-previous-page-using-javascript/
  https://stackhowto.com/how-to-go-back-to-previous-page-in-javascript/

  troquei por
  return <Navigate to="/notfound" state={{ from: pathname }} replace />
  */
