import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Jh_eUHKu8N0BJPZfhbQteeXYRbOp4qOMtVbWvoBATFA'
      }
})