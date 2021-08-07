import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID TUQ-WFy9bmHu3G8icZJMjJnIcfnjoiY2dmIqqLoUtQw'
      }
})