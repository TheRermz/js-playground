const players = [];

const addPlayer = () => {
  const playerName = document.getElementById("name");
  const playerPosition = document.getElementById("position");
  const playerNum = document.getElementById("number");
  const player = {
    name: playerName.value,
    position: playerPosition.value,
    number: playerNum.value,
  };
  if (
    playerName.value === "" ||
    playerPosition.value === "" ||
    playerNum.value === ""
  ) {
    alert("Preencha todos os campos!");
    return;
  } else if (players.some((p) => p.number === playerNum.value)) {
    alert("Número já cadastrado!");
    return;
  } else if (players.length >= 11) {
    alert("Limite de jogadores atingido!");
    return;
  } else {
    players.push(player);
    playerName.value = "";
    playerPosition.value = "";
    playerNum.value = "";
  }

  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.innerHTML = `${player.name} - ${player.position} - ${player.number}`;
  ul.appendChild(li);
  document.getElementById("escalacao").appendChild(ul);
};

const removePlayer = () => {
  const playerNum = document.getElementById("number");
  const playerIndex = players.findIndex((p) => p.number === playerNum.value);
  if (playerIndex === -1) {
    alert("Jogador não encontrado!");
    return;
  } else {
    players.splice(playerIndex, 1);
    playerNum.value = "";
  }
  const ul = document.getElementById("escalacao");
  ul.innerHTML = "";
  players.forEach((player) => {
    const li = document.createElement("li");
    li.innerHTML = `${player.name} - ${player.position} - ${player.number}`;
    ul.appendChild(li);
  });
};

const rosterTeam = () => {
  if (players.length <= 0) {
    alert("Nenhum jogador cadastrado!");
  }
  //  else if (players.length < 11) {
  //     alert("Faltam jogadores para completar o time!");
  //   }
  else {
    if (confirm("Deseja escalar este time?")) {
      alert("Time escalado com sucesso!");
    }
  }
};
