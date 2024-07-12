// creating the recipient types for instantPayout
export type recipient = {
  recipient_payout_amount: number;
  recipient_currency_code: string;
  recipient_first_name: string;
  recipient_last_name: string;
  recipient_email_address: string;
  recipient_phone_number: string;
  recipient_bank_code: string;
  recipient_account_number: string;
  recipient_narration: string;
};

//define the service paylaod for instant payout
export type payout_service_payload = {
  request_application: string;
  application_module: string;
  application_version: string;
  request_class: string;
  payment_amount: number;
  currency_code: string;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  virtual_account_name: string;
  partner_bank: string;
  recipient: recipient;
};

/*
 * this type defined create a collection and
 * payout request with one instruction
 * ****/
export type instantCollectionPayout = {
  service_type: string;
  service_payload: payout_service_payload;
};
