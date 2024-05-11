const horario = document.querySelector('#horario');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

//formatTime realiza tratamento de valores, atribuindo um zero em valores menores que 10 ex: 8:57:15 > 08:57:15.
function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

setInterval(() => {
  let date = new Date(); //obtém data e hora atual.
  let horas = date.getHours(); //função p/ pegar hora atual
  let min = date.getMinutes(); //função p/ pegar minutos
  let sec = date.getSeconds(); //função p/ pegar segundos

  horario.innerHTML = `${formatTime(horas)}`;
  minutos.innerHTML = `${formatTime(min)}`;
  segundos.innerHTML = `${formatTime(sec)}`;
}, 1000); //setInterval determina o intervalo de tempo em que o codigo deve ser executado.
