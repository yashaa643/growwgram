import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a30ME_iKqzinJrzlU92IL0hIfM_99bO9OYNSolr7C2o'
      }
})