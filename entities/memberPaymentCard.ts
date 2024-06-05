import { Member } from './member';
import { Card } from './card';

export class MemberPaymentCard {
    id: number;
    isDefaultMethod: boolean;
    isActive: boolean;
    member: Member;
    paymentCard: Card;
  
    constructor(
        id: number,
        isDefaultMethod: boolean,
        isActive: boolean,
        member: Member,
        paymentCard: Card

   
    ) {
       this.id = id;
       this.isDefaultMethod = isDefaultMethod;
       this.isActive = isActive;
       this.member = member;
       this.paymentCard = paymentCard;
    }
  }