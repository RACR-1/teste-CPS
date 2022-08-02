const button = document.querySelector("#botao");
const cronometro = document.querySelector(".clock");
const clicks = document.querySelector(".clicks");
const CPS = document.querySelector(".CPS");

let valor = 0;
button.addEventListener("click", () => {
  clicking();
  cronometer();
});

async function cronometer() {
  if (cronometer.on == 0) {
    cronometer.on = 1;
    for (let i = 5; i > 0; i--) {
      cronometro.value = `Cronometro:${i}s`;
      await new Promise((r) => setTimeout(r, 1000));
    }
    CPS.value = `clicks Por Segundo:${valor / 5}`;
    time_Out();

    valor = 0;
  }
}
cronometer.on = 0;

function clicking() {
  if (clicking.can == 0) {
    clicks.value = `clicks:${(valor += 1)}`;
  }
}
clicking.can = 0;

const time_Out = async () => {
  button.classList.add("configs");
  button.textContent = "Time out";
  clicking.can = 1;
  await new Promise((r) => setTimeout(r, 2000));
  reset();
};

function reset() {
  button.classList.remove("configs");

  cronometro.value = "Cronometro:";
  clicks.value = "clicks:";
  button.textContent = "click on me";

  clicking.can = 0;
  cronometer.on = 0;
}
