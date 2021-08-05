import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Y3V9QcqQXnmRvb-p1lsJXOgxNxq4MSBcaWRZ1zuQdR8'
      }
})