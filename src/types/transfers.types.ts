export type account_service_payload = {
  bank_code: string;
  account_number: string;
  currency: string;
};

//make enquiry
export type account_enquiry = {
  service_payload: account_service_payload;
};

export type sender = {
  sender_name: string;
  sender_id: string;
  sender_phone_number: string;
  sender_address: string;
};

export type beneficiaries = {
  credit_amount: number;
  account_number: string;
  account_name: string;
  bank_code: string;
  narration: string;
  transaction_reference: string;
  sender: sender;
};

export type transfer_service_payload = {
  payout_amount: number;
  transaction_pin: number;
  account_reference: number;
  currency: string;
  payout_beneficiaries: beneficiaries[];
};

// initiate transfer payload
export type initiateTransfer = {
  transaction_type: string;
  service_payload: transfer_service_payload;
};
