import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID RHfBZaVDqW4_C819eR078r2eCRIdjewiN9MxXktxWnM'
      }
})