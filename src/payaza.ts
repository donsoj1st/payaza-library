import encrypt from "./lib/security";
import { branches } from "./services/branches";
import { cardCollections } from "./services/cardCollections";
import { instantCollectionPayouts } from "./services/instantCollectionPayout";
import subaccounts from "./services/subaccounts";
import { transfers } from "./services/transfers";
import { virtualAccounts } from "./services/virtualAccounts";
import { virtualCards } from "./services/virtualCards";
import { virtualGiftCards } from "./services/virtualGiftCards";

export class payaza {
  public virtualAccount: virtualAccounts;
  public cardCharge: cardCollections;
  public branch: branches;
  public transfer: transfers;
  public giftCard: virtualGiftCards;
  public subAccount: subaccounts;
  public instantCollectionPayout: instantCollectionPayouts;
  public virtualCard: virtualCards;
  private token: string;
  constructor(token: string) {
    this.token = encrypt(token.trim());
    this.cardCharge = new cardCollections(this.token);
    this.branch = new branches(this.token);
    this.virtualAccount = new virtualAccounts(this.token);
    this.transfer = new transfers(this.token);
    this.giftCard = new virtualGiftCards(this.token);
    this.subAccount = new subaccounts(this.token);
    this.instantCollectionPayout = new instantCollectionPayouts(this.token);
    this.virtualCard = new virtualCards(this.token);
    console.log("connected to Payaza");
  }
}
