import { postData } from "../lib/axiosInstance";
import {
  createGiftCard,
  fundGiftCards,
  GiftCardRef,
  GiftCardsHistory,
} from "../types/virtualGiftCards.types";

export class virtualGiftCards {
  private url: string = "https://cards-live.78financials.com/virtual_card/";
  constructor(private token: string) {}

  async issueGiftCard(data: createGiftCard): Promise<any> {
    const response = postData(this.url + "create", data, this.token);
    return response;
  }

  async fundGiftCard(data: fundGiftCards): Promise<any> {
    const response = postData(
      this.url + "fund_virtual_gift_card",
      data,
      this.token
    );
    return response;
  }
  async viewGiftCardDetails(data: GiftCardRef): Promise<any> {
    const response = postData(this.url + "get_card_details", data, this.token);
    return response;
  }
  async blockGiftCard(data: GiftCardRef): Promise<any> {
    const response = postData(this.url + "unload_card", data, this.token);
    return response;
  }
  async getGiftCardHistory(data: GiftCardsHistory): Promise<any> {
    const response = postData(
      this.url + "transaction_history",
      data,
      this.token
    );
    return response;
  }
}
