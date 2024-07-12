import { fetchData, postData } from "../lib/axiosInstance";
import {
  cardHolderDetails,
  fundVirtualCard,
  issueVirtualCards,
  merchantFilter,
  registerVirtualCards,
  transaction,
} from "../types/virtualCards.types";

export class virtualCards {
  private url: string =
    "https://cards-live.78financials.com/virtual_card/cards";
  constructor(private token: string) {}

  async getCardByCountry(data: string): Promise<any> {
    const response: any = await fetchData(
      this.url + `/get_identity_by_country/${data}`,
      this.token
    );
    return response;
  }

  async getCardByIdentity(data: string): Promise<any> {
    const response: any = await fetchData(
      this.url + `/get_identity_requirement/${data}`,
      this.token
    );
    return response;
  }

  async getCardTransaction(data: transaction): Promise<any> {
    const response: any = await fetchData(
      this.url +
        `/get_card_transactions/${data.card_reference}/${data.start_at}/${data.limit}`,
      this.token
    );
    return response;
  }
  async getCardholder(data: cardHolderDetails): Promise<any> {
    const response: any = await fetchData(
      this.url +
        `/get_cardholder_cards/${data.user_uuid}/${data.start_at}/${data.limit}`,
      this.token
    );
    return response;
  }
  async getMerchantCardByFilter(data: merchantFilter): Promise<any> {
    const response: any = await fetchData(
      this.url + `/get_merchant_cards/${data.start_at}/${data.limit}`,
      this.token
    );
    return response;
  }
  async getAllCard(): Promise<any> {
    const response: any = await fetchData(
      this.url + `/get_all_cardholders_for_merchant/`,
      this.token
    );
    return response;
  }

  async create(data: issueVirtualCards): Promise<any> {
    const response = await postData(
      this.url + "/create_card",
      data,
      this.token
    );
    return response;
  }

  async fund(data: fundVirtualCard): Promise<any> {
    const response = await postData(
      this.url + "/fund_virtual_card",
      data,
      this.token
    );
    return response;
  }

  async register(data: registerVirtualCards): Promise<any> {
    const response = await postData(
      this.url + "/register_cardholder",
      data,
      this.token
    );
    return response;
  }
  async view(data: any): Promise<any> {
    const response = await postData(
      this.url + "/get_card_details",
      data,
      this.token
    );
    return response;
  }
}
