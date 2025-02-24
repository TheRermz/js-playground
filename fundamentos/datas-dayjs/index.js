const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
require("dayjs/locale/pt-br");
dayjs.extend(customParseFormat);
dayjs.locale("pt-br");

const today = dayjs();
const currentYear = today.year();

let birthday = dayjs(`01-08-${currentYear}`, "DD-MM-YYYY");

let age = today.diff(dayjs(`01-08-1997`, "DD-MM-YYYY"), "year");

let nextBirthday = birthday.isBefore(today)
  ? birthday.add(1, "year")
  : birthday;

let daystoBirthday = nextBirthday.diff(today, "day");

console.log(`Você tem ${age} anos.`);
console.log(`Faltam ${daystoBirthday} dias para o seu aniversário.`);
console.log(`Seu aniversário é em ${nextBirthday.format("DD/MM/YYYY")}`);
