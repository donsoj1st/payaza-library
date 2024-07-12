import { Buffer } from "buffer";

/* *************
 * this function will encrypt the secret key to
 * to base64
 * Author Adekunle Adesoji
 * ************ */
export default function encrypt(key: string): string {
  const encryptedKey = Buffer.from(key).toString("base64");

  return encryptedKey;
}
