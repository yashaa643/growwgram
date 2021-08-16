import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qJvoCrXspu6Pu3gfrfLFCI0rtldvBxDjQVBVrDxZjmQ'
      }
})