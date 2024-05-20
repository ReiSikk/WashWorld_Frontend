
export class Card {
    id: number;
    nameOnCard: string;
    cardNumber: string;
    expirationDate: Date;
    cvv: string;
  
    constructor(
        id: number,
        nameOnCard: string,
        cardNumber: string,
        expirationDate: Date,
        cvv: string,
   
    ) {
      this.id = id;
        this.nameOnCard = nameOnCard;
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
    }
  }