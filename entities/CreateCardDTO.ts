

export class CreateCardDTO {
    nameOnCard: string;
    cardNumber: string;
    expirationDate: Date;
    cvv: string;

  constructor(nameOnCard: string, cardNumber: string, expirationDate: Date, cvv: string) {
    this.nameOnCard = nameOnCard;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvv = cvv;
    } 
}