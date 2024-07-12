import { fetchData, postData } from "../lib/axiosInstance";
import { subAccounts } from "../types/subaccounts.types";

export default class subaccounts {
  private url: string =
    "https://api.payaza.africa/live/payaza-account/api/v1/subaccounts/merchant";
  constructor(private token: string) {}

  async createSubaccount(data: subAccounts): Promise<any> {
    const response = await postData(this.url, data, this.token);
    return { data: data, response };
  }
  async getSubaccountDetails(data: string): Promise<any> {
    const response = await fetchData(
      "https://api.payaza.africa/live/payaza-account/api/v1/virtualaccounts/merchant/enquiry/" +
        data,
      this.token
    );
    return { data: data, response };
  }
}
