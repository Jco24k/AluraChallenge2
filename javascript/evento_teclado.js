const nombres = ["HTML", "CSS", "JAVASCRIPT", "JAVA", "PYTHON"];
var letras = {};
var aleatorio = Math.round(Math.random() * (nombres.length - 1));
let longitud = nombres[aleatorio].length;
var palabra = nombres[aleatorio];
let perder = 10;

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

letras = crearElement(letras, palabra);

var guardar_empezar = document.querySelector("#izquierda");
guardar_empezar.addEventListener("click", function () {
  var texto = document.getElementById("texto").value;
  nombres.push(texto);
  activar_key();
  ocultar_etiqueta("juego");
});

function activar_key() {
  aleatorio = Math.round(Math.random() * (nombres.length - 1));
  longitud = nombres[aleatorio].length;
  palabra = nombres[aleatorio];
  contador = 2;
  letras = crearElement(letras, palabra);
  iniciar_canvas();
  var terminar_juego = false;
  document.addEventListener("keyup", (evento) => {
    //VALIDAR SOLO DATOS ALFABETICOS
    let charCode = evento.keyCode;
    var verificar =
      (charCode > 64 && charCode < 91) || charCode == 192 ? true : false;
    if (!terminar_juego) {
      if (verificar) {
        let tecla = evento.key.toUpperCase();
        if (longitud >= 1) {
          if (Object.values(letras).includes(tecla)) {
            for (let i = 0; i < Object.values(letras).length; i++) {
              if (tecla == Object.values(letras)[i]) {
                let matriz = document.getElementById(Object.keys(letras)[i]);
                if (matriz.style.visibility == "visible") {
                  continue;
                }
                matriz.style.visibility = "visible";
                longitud--;
                if (longitud == 0) {
                  juego_finalizado(true);
                  terminar_juego = true;
                }
              }
            }
          } else {
            texto = document.getElementById("texto_incorrecto");
            if (!texto.innerHTML.includes(tecla) && contador < perder + 1) {
              texto.innerHTML += evento.key.toUpperCase();
              creando_canvas(contador);
              contador++;
              if (contador - 1 == perder) {
                juego_finalizado(false);
                terminar_juego = true;
              }
            }
          }
        }
      }
    }
  });
}
function juego_finalizado(ganador) {
  var mensaje = document.getElementById("mensaje");
  var dato = document.createElement("h2");
  dato.setAttribute("id", "mensaje");
  if (ganador) {
    dato.textContent = "Ganaste, Felicidades!";
    dato.style.color = "green";
  } else {
    dato.textContent = "Fin del Juego!";
    dato.style.color = "red";
  }
  mensaje.appendChild(dato);
}

function crearElement(letras, palabra) {
  letras = {};
  var valor = document.querySelectorAll("#palabra_secreta");
  for (var i = 0; i < valor.length; i++) {
    valor[i].innerHTML = "";
  }

  for (let i = 0; i < palabra.length; i++) {
    var div1 = document.getElementById("palabra_secreta");
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "texto_valido" + i);
    h1.setAttribute("class", "texto_valido");
    h1.style.visibility = "hidden";
    letras["texto_valido" + i] = palabra[i];
    h1.innerHTML = palabra[i];
    div.appendChild(h1);
    div1.appendChild(div);
  }

  return letras;
}
