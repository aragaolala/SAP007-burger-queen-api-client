import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

/* eslint-disable */
export function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return navigate('/login');
    }
  };
  return (
    <FiLogOut style={{ fontSize: '1.4em', cursor: 'pointer', marginTop: '30px' }} onClick={() => handleLogout()} />

  );
}
