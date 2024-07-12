// defined card parameters
export type card_details = {
  expiryMonth: string;
  expiryYear: string;
  securityCode: string;
  cardNumber: string;
};

// defined service payload for card charge transaction
export type service_payload = {
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  amount: number;
  transaction_reference: string;
  currency: string;
  description: string;
  card: card_details;
  callback_url: string;
};

// defined card refund details
export type refund_details = {
  transaction_reference: string;
  refund_amount: number;
};

// define type for card status
export type card_status = {
  transaction_reference: string;
};

export type card_refund_status = {
  refund_transaction_reference: string;
};

//define types for card history
export type card_history = {
  request_application: string;
  application_module: string;
  application_version: string;
  request_class: string;
  start_date: string;
  end_date: string;
  order: string;
  page: number;
};

/****
 * author: adesoji Adekunle
 * This type help to define the parameter
 * for card status.
 * this worked for both refund and transacrtion status
 *****/
export type cardCharge = { service_payload: service_payload };

/****
 * author: adesoji Adekunle
 * This type help to define the parameter
 * for card refund.
 * this worked for card refund
 *****/
export type cardRefund = { service_payload: refund_details };

/****
 * author: adesoji Adekunle
 * This type help to define the parameter
 * for card status.
 * this worked for both refund and transacrtion status
 *****/
export type cardStatus = {
  service_payload: card_status;
};

export type cardRefundStatus = {
  service_payload: card_refund_status;
};

/****
 * author: adesoji Adekunle
 * This type help to define the parameter
 * for card history.
 * this worked for both refund and transacrtion history
 *****/

export type cardHistory = {
  service_type: string;
  service_payload: card_history;
};

/* **
 * This type serves the purpose of
 * defining parameter for card to check 3D Secure (3DS)
 * capabilities or not
 */
export type check3DS = {
  card_number: string;
  currency: string;
};
