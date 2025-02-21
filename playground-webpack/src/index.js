import "./style.css";

const btnAdd = document.querySelector(".btn-add");
const rootDiv = document.querySelector(".root");
const rollableTable = document.querySelector(".rollable-table");
const tableValues = document.querySelector(".table-values");

const addToLocalStorage = (inputName) => {
  const input = document.querySelector(`[name="${inputName}"]`);
  localStorage.setItem("name", input.value);
  input.value = "";
};

const createUserCookie = (inputName, duration = 1) => {
  const input = document.querySelector(`[name="${inputName}"]`);
  let date = new Date();
  date.setTime(date.getTime() + duration * 24 * 60 * 60 * 1000);
  if (input.value == "") {
    alert(`Por favor insira um nome de usuário!`);
  } else {
    document.cookie = `name=${
      input.value
    }; expires=${date.toUTCString()}; path=/`;
    input.value = "";
    alert(`O usuário ${getCookie("name")} foi criado!`);
  }
};

const getCookie = (name) => {
  let cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};

const addInput = (name, type = "text") => {
  if (document.querySelector(`[name="${name}"]`)) return;
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.classList.add("input-container");
  rootDiv.appendChild(input);
};

const addLabel = (htmlFor, text) => {
  if (document.querySelector(`label[for="${htmlFor}"]`)) return;
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.textContent = text;
  label.classList.add("label-container");
  rootDiv.appendChild(label);
};

const addButton = (text, type = "submit") => {
  if (document.querySelector(".send-btn")) return;
  const button = document.createElement("button");
  button.textContent = text;
  button.type = type;
  button.classList.add("dynamic-btn");
  button.classList.add("send-btn");
  rootDiv.appendChild(button);

  button.addEventListener("click", (e) => {
    e.preventDefault();
    createUserCookie("name", 1);
  });
};

const rollDie = (sides) => {
  return Math.floor(Math.random() * sides + 1);
};

const addRollButton = (sides = 20, type = "submit", text = `D${sides}`) => {
  const existingBtn = document.querySelectorAll(".roll-btn");
  if (existingBtn.length >= 7) return;
  const button = document.createElement("button");
  button.textContent = text;
  button.type = type;
  button.classList.add("dynamic-btn", "roll-btn");
  rollableTable.appendChild(button);
  const result = document.createElement("label");
  result.classList.add("label-resp", "label-container");
  tableValues.appendChild(result);

  button.addEventListener("click", (e) => {
    e.preventDefault();

    let die = rollDie(sides);
    console.log(die);
    result.textContent = `D${sides}: ${die} `;
  });
};

const fibonacci = (size) => {
  if (size < 1) return [];
  if (size === 1) return [0];

  let sequence = [0, 1];

  for (let i = 2; i < size; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};

const handleClick = (e) => {
  e.preventDefault();
  addLabel("name", "Nome de usuário: ");
  addInput("name");
  addButton("Enviar");
  addRollButton(4);
  addRollButton(6);
  addRollButton(8);
  addRollButton(10);
  addRollButton(12);
  addRollButton(20);
  addRollButton(100);
  btnAdd.classList.replace("d-block", "d-none");
};

btnAdd.addEventListener("click", handleClick);
