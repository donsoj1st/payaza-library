import { postData } from "../lib/axiosInstance";
import { createBranch } from "../types/branches.types";

export class branches {
  private url: string =
    "https://router-live.78financials.com/api/request/secure/payloadhandler";
  constructor(private token: string) {}

  /*****
   * this function createBranch method take
   * the payload as a parameter and create a branch
   * and return the branch id
   * Author: Adekunle Adesoji
   * Email:
   */
  async createBranch(data: createBranch): Promise<any> {
    const response = postData(this.url, data, this.token);
    return response;
  }
}
