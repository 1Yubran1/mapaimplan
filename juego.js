var piezas = document.getElementsByClassName('movil');
var tamWidth  = [100, 40, 10, 150, 100, 50, 100, 200, 70, 50, 100, 100, 110, 160, 100, 110, 30, 300, 200, 100, 100, 52];
var tamHeight = [100, 40, 10, 150, 100, 50, 100, 200, 60, 50, 100, 100, 110, 150, 100, 100, 30, 295, 190, 100, 90, 52];

for (var i = 0; i < piezas.length; i++) {
  piezas[i].setAttribute("width", tamWidth[i]);
  piezas[i].setAttribute("height", tamHeight[i]);
  piezas[i].setAttribute("x", Math.floor(Math.random() * 100 + 1));
  piezas[i].setAttribute("y", Math.floor(Math.random() * 100 + 1));
  piezas[i].addEventListener("mousedown", function(evt) {
    seleccionarElemento(evt);
  });
}

var elementSelect = null;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
  elementSelect = evt.target;
  currentX = evt.clientX;
  currentY = evt.clientY;
  currentPosX = parseFloat(elementSelect.getAttribute("x"));
  currentPosY = parseFloat(elementSelect.getAttribute("y"));
  elementSelect.addEventListener("mousemove", function(evt) {
    moverElemento(evt);
  });
  elementSelect.addEventListener("mouseup", function(evt) {
    deseleccionarElemento(evt);
  });
}

function moverElemento(evt) {
  if (elementSelect) {
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    currentPosX += dx;
    currentPosY += dy;
    elementSelect.setAttribute("x", currentPosX);
    elementSelect.setAttribute("y", currentPosY);
    currentX = evt.clientX;
    currentY = evt.clientY;
  }
}

function deseleccionarElemento(evt) {
  testing();
  if (elementSelect) {
    elementSelect.removeEventListener("mousemove", moverElemento);
    elementSelect.removeEventListener("mouseup", deseleccionarElemento);
    elementSelect = null;
  }
}

var entorno = document.getElementById('entorno');

function reordenar(evt) {
  var padre = evt.target.parentNode;
  var clone = padre.cloneNode(true);
  var id = padre.getAttribute("id");
  entorno.removeChild(document.getElementById(id));
  entorno.appendChild(clone);
  return entorno.lastChild.firstChild;
}

var origX = [200];
var origY = [100];

function iman() {
  for (var i = 0; i < piezas.length; i++) {
    if (Math.abs(currentPosX - origX[i]) < 15 && Math.abs(currentPosY - origY[i]) < 15) {
      elementSelect.setAttribute("x", origX[i]);
      elementSelect.setAttribute("y", origY[i]);
    }
  }
}

var confeti = document.getElementsByClassName("confetti");

function testing() {
  var bienUbicada = 0;
  var padres = document.getElementsByClassName('padre');
  for (var i = 0; i < piezas.length; i++) {
    var posX = parseFloat(padres[i].firstChild.getAttribute("x"));
    var posY = parseFloat(padres[i].firstChild.getAttribute("y"));
    ide = padres[i].getAttribute("id");
    if (origX[ide] == posX && origY[ide] == posY) {
      bienUbicada = bienUbicada + 1;
    }
  }
  if (bienUbicada === 22) {
    confeti[0].play();
  }
}

// Espera a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Obtén el botón por su ID
  var btnTerminar = document.getElementById("btnTerminar");

  // Agrega un evento de clic al botón
  btnTerminar.addEventListener("click", function() {
      // Ejecuta alguna función o acción cuando se haga clic en el botón
      console.log("Botón 'Terminar' clicado");
      // Aquí puedes llamar a la función que desees ejecutar al hacer clic en el botón
      // Por ejemplo:
      terminarJuego(); // Esto es un ejemplo, deberías definir la función `terminarJuego()` con la lógica que desees
    });
});

function activarConfeti() {
  // Aquí va la lógica para activar el confeti
  console.log("Confeti activado");
  // Puedes utilizar una biblioteca de confeti, como por ejemplo 'confetti-js'
  // Por ejemplo:
  confetti();
}
