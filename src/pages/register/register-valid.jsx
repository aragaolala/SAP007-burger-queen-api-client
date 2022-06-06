export const ErrorsMessage = (values) => {
  let errors = {};

  if (values.name.length < 3) {
    errors.name = "Eita, faltou o nome";
  }

  if (!values.email) {
    errors.email = "Vish, qual o seu email?";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Ops, email inválido ";
  }

  if (!values.password) {
    errors.password = "Faltou a senha!";
  } else if (values.password.length < 6) {
    errors.password = "Hmmm... A senha deve ser maior que 5 caracteres";
  }

  if (!values.role) {
    errors.role = "Selecione sua função";
  }

  errors.ok =
    !errors.name &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    !errors.role;

  return errors;
};

export default ErrorsMessage;
