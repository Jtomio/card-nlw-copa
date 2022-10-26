const chk = document.getElementById("chk");
let isIgnite = true;
chk.addEventListener("change", () => {
  let card = document.getElementById("card");
  card.classList.add("cardignite");
  document.body.classList.toggle("ignite");
  chk.addEventListener("change", () => {
    card.classList.remove("cardignite");
  });
});
