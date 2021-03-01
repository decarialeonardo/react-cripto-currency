import axios, { AxiosInstance } from "axios";
import { mockAssets } from "./assetsMock";

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
}
