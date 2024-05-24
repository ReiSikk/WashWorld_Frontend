
export class Card {
    id: number;
    nameOnCard: string;
    cardNumber: string;
    expirationDate: Date;
    cvv: string;
    isDefaultMethod: boolean;
    isActive: boolean;
  
    constructor(
        id: number,
        nameOnCard: string,
        cardNumber: string,
        expirationDate: Date,
        cvv: string,
        isDefaultMethod: boolean,
        isActive: boolean

   
    ) {
      this.id = id;
        this.nameOnCard = nameOnCard;
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
        this.isDefaultMethod = isDefaultMethod;
        this.isActive = isActive;
    }
  }