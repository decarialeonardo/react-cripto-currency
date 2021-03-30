import axios, { AxiosInstance } from "axios";
import { mockCandles } from "./candlesMock";

const config = {
  baseUrl: "https://api.coincap.io/v2",
  headers: {},
};

export class CandlesService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create(config);
  }

  getCandles(exchangeId, interval, baseId, quoteId): Promise<any> {
    // return this.http.get(`${config.baseUrl}/candles?exchange=${exchangeId}&interval=${interval}&baseId=${baseId}&quoteId=${quoteId}`);
    return Promise.resolve(mockCandles);
  }
}
