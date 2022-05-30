function iniciar_canvas(){
  //pincel.clearRect(0, 0, 250, 350);
  document.getElementById('hola').innerHTML='';
  var hola = document.getElementById('hola');
  var canvas = document.createElement('canvas');
  canvas.setAttribute('id','pizarra');
  canvas.width = 250;
  canvas.height = 350;
  canvas.style.backgroundColor = 'white'
  hola.appendChild(canvas);
  pincel.fillStyle = "white";
  pincel.fillRect(0, 0, 250, 350);
  pantalla = document.querySelector("canvas");
  pincel = pantalla.getContext("2d");
  creando_canvas(1);
}


function cabeza() {
  pincel.fillStyle = "white";
  pincel.beginPath();
  pincel.arc(180, 100, 35, 0, 2 * 3.14);
  pincel.stroke();
}

function lineas(x_incial, y_inicial, x_final, y_final) {
  pincel.lineWidth = 5;
  pincel.strokeStyle = "#0A3871";
  pincel.moveTo(x_incial, y_inicial);
  // Hacemos una línea hasta 48, 48
  pincel.lineTo(x_final, y_final);
  pincel.stroke();
}

function creando_canvas(opcion) {
  switch (opcion) {
    case 1  : lineas(5,340,240,340); break;
    case 2  : lineas(50,22,50,340); break;
    case 3  : lineas(50,22,180,22); break;
    case 4  : lineas(180,20,180,60); break;
    case 5  : cabeza(); break;
    case 6  : lineas(180,140,180,230); break;
    case 7  : lineas(180,170,130,220); break;
    case 8  : lineas(180,170,230,220); break;
    case 9  : lineas(180,230,130,280); break;
    default: lineas(180,230,230,280); break;
  }
}
