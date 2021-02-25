import axios, { AxiosInstance, AxiosPromise } from "axios";

const config = {
  baseUrl: "https://api.coincap.io/v2",
  headers: {},
};

export class AssetsService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create(config);
  }

  getAssets(): AxiosPromise<any> {
    return this.http.get(`${config.baseUrl}/assets`);
  }
}
