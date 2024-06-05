export class CreateSupportTicket {
    description: string;
    photo: string;
  
    constructor(description: string, photo: string) {
      this.description = description;
      this.photo = photo;
    }
  }