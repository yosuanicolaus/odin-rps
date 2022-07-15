const form = document.querySelector("form");
const playerName = document.getElementById("player");

form.onsubmit = () => {
  const data = Object.fromEntries(new FormData(form).entries());
  console.log(data);

  localStorage.setItem("playerName", data.player);
  localStorage.setItem("AIName", data.AI);
};

window.onload = () => {
  if (localStorage.getItem("playerName")) {
    playerName.value = localStorage.getItem("playerName");
  }
};
