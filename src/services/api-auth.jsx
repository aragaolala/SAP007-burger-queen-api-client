const baseURL = 'https://lab-api-bq.herokuapp.com';
const headers = { 'Content-Type': 'application/json' };

export const createUser = async (name, email, password, role) => fetch(`${baseURL}/users`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    name,
    email,
    password,
    role,
    restaurant: 'Brasa Burguer',
  }),
}).then((res) => res.json());
// console.log(createUser);

export const LoginEmailPassword = async (email, password) => fetch(`${baseURL}/auth`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    email,
    password,
  }),
}).then((res) => res.json());
// console.log(LoginEmailPassword);
