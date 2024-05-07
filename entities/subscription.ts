
export class Subscription {
    id: number;
    name: string;
    price_per_month_kr: number;
    description: string;

  
    constructor(
      id: number,
      name: string,
      price_per_month_kr: number,
      description: string
    ) {
      this.id = id;
      this.name = name;
      this.price_per_month_kr = price_per_month_kr;
      this.description = description;
    }
  }