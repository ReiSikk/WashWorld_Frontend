export class WashStation {
    id: number;
    stationNr: string;
    stationName: string;
    address: string;
    openingTime: string;
    closingTime: string;
  
    constructor(
        id: number,
        stationNr: string,
        stationName: string,
        address: string,
        openingTime: string,
        closingTime: string,
   
    ) {
      this.id = id;
        this.stationNr = stationNr;
        this.stationName = stationName;
        this.address = address;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
    }
  }