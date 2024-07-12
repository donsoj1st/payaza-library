# Payaza Node.js Library

The Payaza Node library provides convenient access to the Payaza API from
applications written in server-side JavaScript.

For collecting customer and payment information in the browser, use [Payaza.js][Payaza-js].

## Documentation

See the [`Payazae-node` API docs](https://docs.payaza.africa/developers/apis) for Node.js.

## Requirements

Node 12 or higher.

## Installation

Install the package with:

```sh
npm install @payaza/lib
# or
yarn add @payaza/lib
```

## Usage

The package needs to be configured with your account's secret key, which is
available in the [Payaza Dashboard][api-keys]. Require it with the key's
value:

Note: [There is no need to convert the key to base64]

<!-- prettier-ignore -->
```js
const Payaza = require('@payaza/lib')('payaza_live_apikey');

Payaza.transfer.initiateTransfer({
  transaction_type: "nuban",
  service_payload: {
    payout_amount: 300,
    transaction_pin: 1429,
    account_reference: 1010005557,
    currency: "NGN",
    payout_beneficiaries: [
      {
        credit_amount: 300,
        account_number: "8137479322",
        account_name: "OPAY",
        bank_code: "100004",
        narration: "Test",
        transaction_reference: "TRFT2102278adea4aa5",
        sender: {
          sender_name: "adekunle",
          sender_id: "",
          sender_phone_number: "",
          sender_address: "",
        },
      },
    ],
  },
})
  .then(response => console.log(response);)
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```js
import { payaza } from "@payaza/lib";

const Payaza = new payaza("payaza_live_apikey");
const response = await Payaza.transfer.initiateTransfer({
  transaction_type: "nuban",
  service_payload: {
    payout_amount: 300,
    transaction_pin: 1429,
    account_reference: 1010005557,
    currency: "NGN",
    payout_beneficiaries: [
      {
        credit_amount: 300,
        account_number: "8137479322",
        account_name: "OPAY",
        bank_code: "100004",
        narration: "Test",
        transaction_reference: "TRFT2102278adea4aa5",
        sender: {
          sender_name: "adekunle",
          sender_id: "",
          sender_phone_number: "",
          sender_address: "",
        },
      },
    ],
  },
});

console.log(response);
```

### Usage with TypeScript

This package can be use with typescript.

```ts
import { payaza } from "@payaza/lib";

const Payaza = new payaza("payaza_live_apikey");
const data: cardHolderDetails = {
  user_uuid: "9cf1f-0189-1024-b3c9-d324a8e154c",
  start_at: 1,
  limit: 10,
};
payaza.virtualCard.getCardholder(data);
```
