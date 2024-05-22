export class CreateCarDto {
    licensePlate: string;
    country: string;
    subscriptionPlanId: string;
    paymentCardId: string;
  
    constructor(licensePlate: string, country: string, subscriptionPlanId: string, paymentCardId: string) {
      this.licensePlate = licensePlate;
      this.country = country;
      this.subscriptionPlanId = subscriptionPlanId;
      this.paymentCardId = paymentCardId;
    }
  }