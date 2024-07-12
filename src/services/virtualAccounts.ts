import { postData } from "../lib/axiosInstance";
import {
  checkTransactionStatus,
  createReserveAccounts,
  createVirtualAccounts,
  reserveAccountsTransactionHistory,
  virtualAccountFund,
  virtualAccountStatus,
  virtualAccountsTransactionHistory,
} from "../types/virtualAccounts.types";

export class virtualAccounts {
  private url: string =
    "https://router-live.78financials.com/api/request/secure/payloadhandler";
  constructor(private token: string) {}

  /*****
   * this function createVirtualAccount method take
   * the payload as a parameter and create a vitual Account
   * Author: Adekunle Adesoji
   * Email:
   */
  async createVirtualAccount(data: createVirtualAccounts): Promise<any> {
    const response = await postData(this.url, data, this.token);
    return { data: data, response };
  }

  /*****
   * this function getAccountStatus method take
   * the payload as a parameter and get account status
   * Author: Adekunle Adesoji
   * Email:
   */
  async getAccountStatus(data: virtualAccountStatus): Promise<any> {
    const response = await postData(this.url, data, this.token);
    return { data: data, response };
  }

  /*****
   * this createReserveAccount method take
   * the payload as a parameter and create reserve account
   * Author: Adekunle Adesoji
   * Email:
   */
  async createReserveAccount(data: createReserveAccounts): Promise<any> {
    const response = await postData(this.url, data, this.token);
    return { data: data, response };
  }

  /*****
   * this checkTransactionStatus method take
   * the payload as a parameter and return the
   * status of a transaction
   * Author: Adekunle Adesoji
   * Email:
   */
  async checkTransactionStatus(data: checkTransactionStatus): Promise<any> {
    const response = await postData(this.url, data, this.token);
    return { data: data, response };
  }

  /*****
   * this getTransactionHistory method take
   * the payload as a parameter and return the
   * array of transaction history
   * Author: Adekunle Adesoji
   * Email:
   */
  async getTransactionHistory(
    data: virtualAccountsTransactionHistory
  ): Promise<any> {
    const response: any = await postData(this.url, data, this.token);
    return { data: data, response };
  }

  /*****
   * this gettReserveTransactionHistory method take
   * the payload as a parameter and return the
   * array of Reserve transaction history
   * Author: Adekunle Adesoji
   * Email:
   */
  async getReserveTransactionHistory(
    data: reserveAccountsTransactionHistory
  ): Promise<any> {
    const response: any = await postData(this.url, data, this.token);
    return { data: data, response };
  }

  /*****
   * this fundVirtualAccount method take
   * the payload as a parameter and return the
   * success message and fund the account
   * Author: Adekunle Adesoji
   * Email:
   */
  async fundVirtualAccount(data: virtualAccountFund): Promise<any> {
    const response = await postData(this.url, data, this.token);
    return { data: data, response };
  }
}
