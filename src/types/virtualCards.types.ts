export type registerVirtualCards = {
  first_name: string;
  last_name: string;
  address: {
    address: string;
    city: string;
    state: string;
    country: string;
    postal_code: string;
    house_no: string;
  };
  phone: string;
  email_address: string;
  identity: {
    id_type: string;
    bvn: string;
    selfie_image: string;
  };
};

export type issueVirtualCards = {
  card_type: string;
  user_uuid: string;
  currency: string;
  card_reference: string;
};

export type getVirtualCardsDetails = {
  card_reference: string;
};

export type fundVirtualCard = {
  card_reference: string;
  fund_amount: number;
  currency: string;
  transaction_reference: string;
};

export type transaction = {
  card_reference: string;
  start_at: number;
  limit: number;
};

export type cardHolderDetails = {
  user_uuid: string;
  start_at: number;
  limit: number;
};

export type merchantFilter = {
  start_at: number;
  limit: number;
};
