import Countdown from './countdown.js'

const tempoFuturo = new Countdown('30 may 2022 19:00:00 GMT-0300')
const tempos = document.querySelectorAll('[data-time]')

const relogio = document.querySelector('.countdown')
const imgbox = document.querySelector('.img-box')

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoFuturo.total[index]
  })
}

mostrarTempo()
setInterval(mostrarTempo, 1000)
