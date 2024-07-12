export type virtual_account_service = {
  request_application: string;
  application_module: string;
  application_version: string;
  request_class: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_email: string;
  customer_phone: string;
  virtual_account_provider: string;
  payment_amount: number;
  payment_reference: string;
};
export type createVirtualAccounts = {
  service_type: string;
  service_payload: virtual_account_service;
};

export type reserve_account_service = {
  request_application: string;
  application_module: string;
  application_version: string;
  request_class: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_email: string;
  customer_phone: string;
  virtual_account_provider: string;
};

export type createReserveAccounts = {
  service_type: string;
  service_payload: reserve_account_service;
};

export type virtual_account_status = {
  request_application: string;
  application_module: string;
  application_version: string;
  request_class: string;
  virtual_account_number: string;
};
export type virtualAccountStatus = {
  service_type: string;
  service_payload: virtual_account_status;
};

export type virtualAccountsTransactionHistory = {
  service_type: string;
  service_payload: {
    request_application: string;
    application_module: string;
    application_version: string;
    request_class: string;
    start_date: string;
    end_date: string;
    order: string;
    page: number;
  };
};

export type virtualAccountFund = {
  service_type: number;
  service_payload: {
    request_application: string;
    application_module: string;
    application_version: string;
    request_class: string;
    account_number: string;
    initiation_transaction_reference: string;
    transaction_amount: number;
    currency: string;
    source_account_number: string;
    source_account_name: string;
    source_bank_name: string;
  };
};

export type reserveAccountsTransactionHistory = {
  service_type: string;
  service_payload: {
    request_application: string;
    application_module: string;
    application_version: string;
    request_class: string;
    static_account_number: string;
    start_date: string;
    end_date: string;
    order: string;
    page: number;
  };
};

export type checkTransactionStatus = {
  service_type: string;
  service_payload: {
    request_application: string;
    application_module: string;
    application_version: string;
    request_class: string;
    transaction_reference: string;
  };
};
