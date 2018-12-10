import axios from 'axios';
import uuidv3 from 'uuid/v3';

// eslint-disable-next-line


const http = axios.create({
  headers: {
    Accept: 'application/json',
    user: uuidv3(`${Math.random()}`, uuidv3.DNS)
  },
  timeout: process.env.TIMEOUT || 10000,
});

export default http;
