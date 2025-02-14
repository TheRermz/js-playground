const btnAdd = document.querySelector(".btn-add");
const rootDiv = document.querySelector(".root");

const addToLocalStorage = (inputName) => {
  const input = document.querySelector(`[name="${inputName}"]`);
  localStorage.setItem("name", input.value);
  input.value = "";
};

const createUserCookie = (inputName, duration) => {
  const input = document.querySelector(`[name="${inputName}"]`);
  let date = new Date();
  date.setTime(date.getTime() + duration * 24 * 60 * 60 * 1000);
  document.cookie = `name=${
    input.value
  }; expires=${date.toUTCString()}; path=/`;
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
    // addToLocalStorage("name");
    // alert(`O usuário ${localStorage.getItem("name")} criado com sucesso!`);
    createUserCookie("name", 1);
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
  addLabel("name", "Nome: ");
  addInput("name");
  //   addLabel("fibonacci", fibonacci(10));
  addButton("Enviar");
  btnAdd.classList.remove("d-block");
  btnAdd.classList.add("d-none");
};

btnAdd.addEventListener("click", handleClick);
