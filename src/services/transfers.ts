import { fetchData, postData } from "../lib/axiosInstance";
import { account_enquiry, initiateTransfer } from "../types/transfers.types";

export class transfers {
  private url: string =
    "https://api.payaza.africa/live/payaza-account/api/v1/mainaccounts/merchant/enquiry/main";
  constructor(private token: string) {}

  /*****
   * This method returns the Payaza account details for a merchant.
   * all it require is the write authorization
   * Author: Adesoji Adekunle
   *
   */
  async getAccountDetails(): Promise<any> {
    const response = await fetchData(this.url, this.token);
    return response;
  }

  /****
   * This method fetches the account details.
   * Author: Adekunle Adesoji
   */
  async makeAccountEnquiry(data: account_enquiry): Promise<any> {
    const response = await postData(
      "https://api.payaza.africa/live/payaza-account/api/v1/mainaccounts/merchant/provider/enquiry",
      data,
      this.token
    );

    return response;
  }

  /****
   * This method initiate a transfer
   * Author: Adekunle Adesoji
   */
  async initiateTransfer(data: initiateTransfer): Promise<any> {
    const response = await postData(
      "https://api.payaza.africa/live/payout-receptor/payout",
      data,
      this.token
    );
    return response;
  }

  /*****
   * This method retrieves transaction details for
   * a specific transaction reference
   * Author: Adekunle Adesoji
   */
  async getTransferStatus(data: string): Promise<any> {
    const response = await fetchData(
      "https://api.payaza.africa/live/payaza-account/api/v1/mainaccounts/merchant/transaction/" +
        data,
      this.token
    );
    return response;
  }
}
