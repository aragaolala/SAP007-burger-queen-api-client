import React from "react";
import { useState } from "react";
import { signIn } from "../../services/api-auth";
import { useHistory } from 'react-router-dom';
import '../../../src/style.css';
import errorsMessages from "./login-validation";
import ModalErrors from "../../components/modal/modal-errors";

const Login = () => {
  localStorage.clear();

  const [values, defineValues] = useState({
    email: '',
    password: '',
  });

  const [errors, defineErrors] = useState({
    email: '',
    password: '',
  });