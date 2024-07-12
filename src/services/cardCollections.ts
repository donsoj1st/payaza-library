import { postData } from "../lib/axiosInstance";
import {
  cardCharge,
  cardHistory,
  cardRefund,
  cardRefundStatus,
  cardStatus,
  check3DS,
} from "../types/cardCollections.types";

export class cardCollections {
  private url: string = "https://cards-live.78financials.com/card_charge";
  constructor(private token: string) {}

  async charge(data: cardCharge): Promise<any> {
    const response = await postData(this.url + "/", data, this.token);
    return response;
  }

  async refund(data: cardRefund): Promise<any> {
    const response = await postData(this.url + "/refund", data, this.token);
    return response;
  }
  async transactionStatus(data: cardStatus): Promise<any> {
    const response = await postData(
      this.url + "/transaction_status",
      data,
      this.token
    );
    return response;
  }
  async refundStatus(data: cardRefundStatus): Promise<any> {
    const response = await postData(
      this.url + "/refund_status",
      data,
      this.token
    );
    return response;
  }
  async History(data: cardHistory): Promise<any> {
    const response = await postData(
      "https://router-live.78financials.com/api/request/secure/payloadhandler",
      data,
      this.token
    );
    return response;
  }

  async checkCard(data: check3DS): Promise<any> {
    const response = await postData(
      this.url + "/check_3ds_availability/",
      data,
      this.token
    );
    return response;
  }
}
