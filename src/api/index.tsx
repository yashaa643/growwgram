import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID t_zYzW6qJZfVHwK860gWG_8KCC1zyCDH_oWoGF-0xlE'
      }
})