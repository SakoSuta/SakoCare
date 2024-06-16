import axios from 'axios';

let LOCATION = "Maison"; // "Ecole" ou "Maison"
let IP = LOCATION === "Ecole" ? 'http://10.2.106.67:3000' : 'http://192.168.1.19:3000';
console.log('IP:', IP);

const api = axios.create({
  baseURL: IP,
});
export default api;
