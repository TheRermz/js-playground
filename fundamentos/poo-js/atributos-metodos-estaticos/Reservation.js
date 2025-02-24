class Reservation {
  constructor(guests, room, days) {
    this.guests = guests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`Base fee is: ${Reservation.baseFee}`);
  }

  static get premiumFee() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const r1 = new Reservation(2, 101, 3);
console.log(r1); // 450

const r2 = new Reservation(3, 102, 10);
console.log(r2); // 1500

console.log(`Premium fee is: ${Reservation.premiumFee}`); // 225
