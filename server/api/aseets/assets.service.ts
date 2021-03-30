import axios, { AxiosInstance } from "axios";
import { mockAssetById, mockAssets, mockAssetHistory } from "./assetsMock";

const config = {
  baseUrl: "https://api.coincap.io/v2",
  headers: {},
};

export class AssetsService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create(config);
  }

  getAssets(): Promise<any> {
    // return this.http.get(`${config.baseUrl}/assets`);
    return Promise.resolve(mockAssets);
  }

  getAssetById(id): Promise<any> {
    // return this.http.get(`${config.baseUrl}/assets/${id}`);
    return Promise.resolve(mockAssetById);
  }

  getAssetHistory(id, interval): Promise<any> {
    // return this.http.get(`${config.baseUrl}/assets/${id}/history?interval=${interval}`);
    return Promise.resolve(mockAssetHistory);
  }
}
