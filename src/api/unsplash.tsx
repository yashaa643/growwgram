import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3VqAClROqWUxsJ6RpPE9abm-3DX6CShAq6ssyirOxAY'
      }
})