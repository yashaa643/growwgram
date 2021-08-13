import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID VNU24jfOdZjeWgQC_K4PGs2QTbNnPdbS1qpFclVLlmA'
      }
})