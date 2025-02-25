const emailInput = document.querySelector(`#email`);
const pwdInput = document.querySelector(`#pwd`);

const emailVerification = () => {
  const isValidEmail = emailInput.value.match(/[\w.-]+@[\w.-]{2,}\.\w{2,}/);
  if (isValidEmail) {
    return emailInput.value;
  }
  alert(`Insira um email válido`);
};

const pwdVerification = () => {
  const isValidPassword = pwdInput.value.match(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/
  );
  if (isValidPassword) {
    return pwdInput.value;
  }
  alert(`Insira uma senha válida`);
};

const verification = (e) => {
  e.preventDefault();
  try {
    emailVerification();
    pwdVerification();
  } catch (err) {
    alert(err.message);
  }
};

document.querySelector(`#send`).addEventListener(`click`, verification);
