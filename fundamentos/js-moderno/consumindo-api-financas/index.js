const renderTransaction = (transaction) => {
  const article = document.createElement(`article`);

  const name = document.createElement(`h1`);
  name.classList.add(`content-name`);
  name.textContent = transaction.name;

  const value = document.createElement(`p`);
  value.classList.add(`content-value`);
  value.textContent = `R$${transaction.amount}`;

  const updateButton = document.createElement(`button`);
  updateButton.type = `submit`;
  updateButton.classList.add(`update-button`);

  updateButton.textContent = `Atualizar`;

  const delButton = document.createElement(`button`);
  delButton.type = `button`;
  delButton.classList.add(`delete-button`);
  delButton.textContent = `Deletar`;

  article.append(name, value, updateButton, delButton);
  document.querySelector(`.root`).appendChild(article);

  updateButton.addEventListener(`click`, () => {
    startUpdate(transaction);
  });

  delButton.addEventListener(`click`, () => {
    deleteFinance(transaction);
  });
};

const fetchTransactions = async () => {
  const resp = await fetch(`http://localhost:3000/transactions`).then((resp) =>
    resp.json()
  );
  resp.forEach(renderTransaction);
};

document.addEventListener(`DOMContentLoaded`, () => {
  fetchTransactions();
});

const form = document.querySelector(`form`);

const createTransaction = async (e) => {
  e.preventDefault();

  const finance = {
    name: document.querySelector(`#name`).value,
    amount: document.querySelector(`#value`).value,
  };

  const resp = await fetch(`http://localhost:3000/transactions`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(finance),
  });

  const savedFinance = await resp.json();
  form.reset();
  renderTransaction(savedFinance);
};

const startUpdate = (transaction) => {
  document.querySelector(`#name`).value = transaction.name;
  document.querySelector(`#value`).value = transaction.amount;

  form.onsubmit = async (e) => {
    e.preventDefault();

    const updatedFinance = {
      name: document.querySelector(`#name`).value,
      amount: document.querySelector(`#value`).value,
    };

    await fetch(`http://localhost:3000/transactions/${transaction.id}`, {
      method: `PUT`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFinance),
    });

    document.querySelector(`.root`).innerHTML = "";
    fetchTransactions();
    document.querySelector(`#name`).value = ``;
    document.querySelector(`#value`).value = ``;
    form.reset();
    form.onsubmit = createTransaction;
  };
};

const deleteFinance = async (transaction) => {
  try {
    await fetch(`http://localhost:3000/transactions/${transaction.id}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.querySelector(`.root`).innerHTML = "";
    await fetchTransactions();
    form.reset();
    form.onsubmit = createTransaction;
  } catch (error) {
    console.error("Erro ao excluir transação:", error);
  }
};

form.onsubmit = createTransaction;
