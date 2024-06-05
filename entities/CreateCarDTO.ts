export class CreateCarDto {
    licensePlate: string;
    country: string;
    subscriptionPlanId: string;
  
    constructor(licensePlate: string, country: string, subscriptionPlanId: string) {
      this.licensePlate = licensePlate;
      this.country = country;
      this.subscriptionPlanId = subscriptionPlanId;
    }
  }