import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://ems-gateway-aws-eu-central-1-dev.coinapi.io/';

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // 'X-CoinAPI-Key': 'B00E1392-42DC-49A0-823C-D18AB52B4D6C'
  },
});

export default api;