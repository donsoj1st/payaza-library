/*
 * this type define the parameter to
 * to fund a virtual gift card
 * ****/
export type fundGiftCards = {
  card_reference: string;
  fund_amount: number;
  currency: string;
  transaction_reference: string;
};

/*
 * this type define the parameter to
 * to check a virtual gift card history
 * ****/

export type GiftCardsHistory = {
  card_reference: string;
  start_date: string;
  end_date: string;
  page: number;
};

/*
 * this type define the parameter to
 * to issue virtual gift card history
 * ****/
export type createGiftCard = {
  first_name: string;
  last_name: string;
  email_address: string;
  home_address: string;
  phone_number: string;
  card_reference: string;
  currency: string;
};

export type GiftCardRef = {
  card_reference: string;
};
