import axios from 'axios';

let LOCATION = "Maison"; // "Ecole" ou "Maison" ou "Autre"
let IP;

if (LOCATION === "Ecole") {
  IP = 'http://10.2.106.67:3000';
} else if (LOCATION === "Maison") {
  IP = 'http://192.168.1.19:3000';
} else {
  IP = 'http://192.168.1.153:3000';
}

console.log('IP:', IP);

const api = axios.create({
  baseURL: IP,
});

export default api;
