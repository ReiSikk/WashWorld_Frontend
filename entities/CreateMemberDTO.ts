import { Member } from "./member";

export class createMemberDTO {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  active?: boolean;
  joinDate?: Date;
  loyaltyPoints?: number;

  constructor(email: string, password: string, firstName: string, lastName: string, phone: string, active: boolean, joinDate: Date, loyaltyPoints: number) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.active = active;
    this.joinDate = joinDate;
    this.loyaltyPoints = loyaltyPoints;
  }
}
