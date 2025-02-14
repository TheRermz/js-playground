const addContact = () => {
  const contactSect = document.querySelector("#contact-list");
  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");
  const nameLi = document.createElement("li");
  nameLi.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.name = "fullname";
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);

  const phoneLi = document.createElement("li");
  phoneLi.innerText = "Telefone: ";
  const phoneInput = document.createElement("input");
  phoneInput.setAttribute("type", "text");
  phoneInput.name = "phone";
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);

  const addressLi = document.createElement("li");
  addressLi.innerText = "Endereço: ";
  const addressInput = document.createElement("input");
  addressInput.setAttribute("type", "text");
  addressInput.name = "address";
  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);

  contactSect.append(h3, ul);
};

const removeContact = () => {
  const contactSect = document.querySelector("#contact-list");
  const titles = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactSect.removeChild(titles[titles.length - 1]);
  contactSect.removeChild(contacts[contacts.length - 1]);
};
