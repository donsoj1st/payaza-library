//defined service_payload type for creating branch
export type branches_service_payload = {
  request_application: string;
  application_module: string;
  application_version: string;
  request_class: string;
  name: string;
  address: string;
  state: string;
  city: string;
  landmark: string;
  status: boolean;
  account_name: string;
};

/****
 * author: adesoji Adekunle
 * This type help to define the parameter
 * for creating branch.
 *****/
export type createBranch = {
  service_type: string;
  service_payload: branches_service_payload;
};
