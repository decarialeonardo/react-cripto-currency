
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllAssets = () => api.get(`/assets`)
export const getAssetById = (id) => api.get(`/assets/${id}`)

const apis = {
    getAllAssets,
    getAssetById,
}

export default apis