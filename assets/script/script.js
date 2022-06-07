import Countdown from './countdown.js'

var dia = 7

const tempoFuturo = new Countdown(`7 july 2022 00:53:00 GMT-0300`)
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
