import axios from "axios";

function getHeader(token: string): any {
  const headers = {
    Authorization: "Payaza " + token,
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-TenantID": "live",
  };
  return headers;
}

/*
 * This function will take the token, data and URL parameter
 * and perform a post request
 * Author: Adekunle Adesoji*/

export const postData = async (url: string, data: any, token: string) => {
  try {
    const response = await axios.post(url, data, {
      maxBodyLength: Infinity,
      headers: getHeader(token),
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Error posting data:",
      error.response ? error.response.data : error.message
    );
  }
};

/*
 * This function will take the token, and URL parameter
 * and perform a fetch request
 * Author: Adekunle Adesoji*/
export const fetchData = async (url: string, token: string) => {
  try {
    const response = await axios.get(url, {
      maxBodyLength: Infinity,
      headers: getHeader(token),
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
  }
};
