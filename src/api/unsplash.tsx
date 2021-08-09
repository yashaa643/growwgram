import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JzVN8jfTJrmoJW2abbZ8Bn-sWXGOXp2MXxqZ2Q2ZmH4'
      }
})