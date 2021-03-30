
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const getAllAssets = () => api.get(`/assets`)
export const getAssetById = (id) => api.get(`/assets/${id}`)
export const getAssetHistory = (id, interval) => api.get(`/assets/${id}/history?interval=${interval}`)

export const getCandles = (exchangeId, interval, baseId, quoteId) => api.get(`/candles?exchangeId=${exchangeId}&interval=${interval}&baseId=${baseId}&quoteId=${quoteId}`)

const apis = {
    getAllAssets,
    getAssetById,
    getAssetHistory,
    getCandles,
}

export default apis