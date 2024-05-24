import { Member } from "./member";
import { Subscription } from "./subscription";

export class Car {
    id: number;
    licensePlate: string;
    country: string;
    subscriptionPlanId: string;
    paymentCardId: string;
    member: Member;
    subscription: Subscription;
  
    constructor(
        id: number,
        licensePlate: string,
        country: string,
        subscriptionPlanId: string,
        paymentCardId: string,
        member: Member,
        subscription: Subscription


   
    ) {
      this.id = id;
        this.licensePlate = licensePlate;
        this.country = country;
        this.subscriptionPlanId = subscriptionPlanId;
        this.paymentCardId = paymentCardId;
        this.member = member;
        this.subscription = subscription;
    }
  }