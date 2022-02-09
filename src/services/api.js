import axios from 'axios'

export const key = "34da4daec4d47e3a4497394406094f04f91bc5e3"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;