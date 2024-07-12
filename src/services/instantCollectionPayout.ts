import { postData } from "../lib/axiosInstance";
import { instantCollectionPayout } from "../types/instantCollectionPayout.types";

export class instantCollectionPayouts {
  private url: string =
    "https://router-live.78financials.com/api/request/secure/payloadhandler";
  constructor(private token: string) {}
  async payout(data: instantCollectionPayout): Promise<any> {
    const response = await postData(this.url, data, this.token);
    return { data: data, response };
  }
}
