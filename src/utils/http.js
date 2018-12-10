import axios from 'axios';
import uuidv3 from 'uuid/v3';

const http = axios.create({
  headers: {
    Accept: 'application/json',
    user: uuidv3('Caio', uuidv3.DNS)
  },
  timeout: process.env.TIMEOUT || 10000,
});

export default http;
