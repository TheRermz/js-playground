function PhoneNumber(phoneNumber) {
  const fixedString = phoneNumber.replace(/[\sa-zA-Z]/g, ``);
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/g)[0];
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, ``);
}

console.log(new PhoneNumber(`+55 (22) 9 7745-2412`));
console.log(new PhoneNumber(`+1 (123) MARCOS NORONHA 9 7745-2412`));
