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

/*
The fetch() method in JavaScript is used to request to the server and load the
information on the webpages. The request can be of any APIs that return the data
of the format JSON or XML. This method returns a promise.
Syntax: fetch('url') //api for the get request .

https://www.geeksforgeeks.org/javascript-fetch-method/#:~:text=The%20fetch()%20method%20in,api%20for%20the%20get%20request%20.

----------------------------------------------------------------
O método then() em JavaScript foi definido na API Promise e é usado para
lidar com tarefas assíncronas, como uma chamada de API.
Valor de retorno: Este método pode retornar uma promessa (se mais um then()
for chamado) ou nada.

https://acervolima.com/por-que-usamos-o-metodo-then-em-javascript/

----------------------------------------------------------------

fetch: requisição HTTP

fetch returns an object as Promise that contains various information like headers,
HTTP status etc. etc. You have res.json() and various other possibilities.
.json() will just return the body as promise with json content.

fetch(url) // asynchronously load contents of the url
           // return a Promise that resolves when res is loaded
      .then(res => res.json()) // call this function when res is loaded
      // return a Promise with result of above function
      .then(res => { // call this function when the above chained Promise resolves

https://devhints.io/js-fetch
https://www.geeksforgeeks.org/express-js-res-json-function/
https://stackoverflow.com/questions/46579533/what-does-thenres-res-json-in-react-native-fetch-mean#:~:text=at%207%3A06-,res.,to%20javascript%2C%20you%20use%20res.

*/
