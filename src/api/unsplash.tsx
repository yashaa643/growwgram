import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ZtotZm3pI6qeZSaY_V5krt5cZkUsaFkkBq5Y0Fm3xbc'
      }
})