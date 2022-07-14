const form = document.querySelector("form");

form.onsubmit = () => {
  const data = Object.fromEntries(new FormData(form).entries());
  console.log(data);

  localStorage.setItem("playerName", data.player);
  localStorage.setItem("AIName", data.AI);
};
