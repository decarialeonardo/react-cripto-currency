
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllAssets = () => api.get(`/assets`)

const apis = {
    getAllAssets,
}

export default apis