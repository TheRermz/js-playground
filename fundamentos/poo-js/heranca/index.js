class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }

  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(1000, 50000);
const house = new House(120, 200000);

console.log(land);
console.log(house);
console.log(house instanceof Property);

class Apartment extends Property {
  constructor(area, price, number) {
    super(area, price);
    this.number = number;
  }

  getFloor() {
    return this.number.slice(0, -2);
  }
}

const apt = new Apartment(80, 100000, `101`);

console.log(apt);
console.log(apt.getFloor());
