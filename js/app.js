document.getElementById('img-button').onclick = function() {
  document.getElementById('img-button').innerHTML = "Iván Cruz <br/> Desarrollador Front-end";
  document.getElementById('img-button').style.backgroundColor = '#2b2d42'
  document.getElementById('img-button').style.border = '2px solid #590d22'
  document.getElementById('img-button').style.color = 'white'
}

const nombreUsuario = prompt('Ingrese su nombre, por favor.')
document.getElementById('saludo-prompt').innerHTML = `Bienvenido/a ${nombreUsuario} a mi CV! 😁`
document.getElementById('saludo-prompt').style.backgroundColor = '#e7d7c1'
document.getElementById('saludo-prompt').style.border = '2px solid #590d22'
document.getElementById('saludo-prompt').style.color = '#2b2d42'

function validarEmail(email) {
  const regExEmail =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const emailValido = regExEmail.test(email);
  if (emailValido === true) {
    alert('El email es válido')
  } else {
    alert('El email NO es válido')
  }
}