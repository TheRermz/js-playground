const telInput = document.querySelector(`#telefone`);
const span = document.querySelector(`#span`);

const validatePhone = (phoneString) => {
  const fixedString = phoneString.replace(/[\sa-zA-Z]/g, ``);
  // const countryID = fixedString.match(/(?<=\+)\d{2}/)
  const ddd = fixedString.match(/(?<=\()\d{2}/);
  const phone = fixedString.match(/(?<=\))9\d{4}-\d{4}/);
  if (!ddd || !phone) return `Número Inválido`;
  return `${ddd}${phone}`.replace(/-/g, ``);
};

const getPhoneString = () => {
  const phoneString = telInput.value.replace(/\D/g, ``);
  if (phoneString.length >= 10) {
    const newPhoneString = phoneString.replace(
      /^(\d{2})(\d{4,5})(\d{4})$/,
      `($1) $2-$3`
    );
    return newPhoneString;
  } else {
    const err = new Error(`Insira um número de telefone válido`);
    throw err;
  }
};

document.querySelector(`#enviar`).addEventListener(`click`, (e) => {
  e.preventDefault();
  span.textContent = ``;
  try {
    const phoneString = getPhoneString();
    const validPhoneNumber = validatePhone(phoneString);
    span.textContent = `Telefone válido! ${validPhoneNumber}`;
    telInput.value = ``;
  } catch (err) {
    span.textContent = err.message;
    telInput.value = ``;
  }
});
