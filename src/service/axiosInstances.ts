import axios from 'axios';


// Prod
// =======================================================
// export const axiosPB = axios.create({
//   baseURL: 'https://goit-phonebook-api.herokuapp.com',
// });

// Dev
// =======================================================
export const axiosPB = axios.create({
  baseURL: 'http://localhost:3000',
});
