import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

const today = dayjs().format("dddd, DD [de] MMMM [de] YYYY");
const hourofTheDay = dayjs().format("HH:mm:ss");

document.querySelector("#app").innerHTML = `
  <h1>Dia e hora</h1>
  <p>Hoje é ${today}</p>
  <p>Agora são ${hourofTheDay}</p>
`;

setupCounter(document.querySelector("#counter"));
