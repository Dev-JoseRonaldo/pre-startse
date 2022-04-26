import Countdown from "./countdown.js";

const tempoFuturo = new Countdown("26 april 2022 18:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

const relogio = document.querySelector('.countdown');
const imgbox = document.querySelector('.img-box');

function mostrarTempo() {

  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoFuturo.total[index];
  });
}

mostrarTempo();
setInterval(mostrarTempo, 1000);




