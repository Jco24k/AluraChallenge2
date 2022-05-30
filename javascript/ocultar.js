
var juego = document.querySelector("#iniciar");
juego.addEventListener("click", function () {
    ocultar_etiqueta("juego");
});
var menu = document.querySelector("#agregar");
menu.addEventListener("click", function () {
    ocultar_etiqueta("menu");
});

juego = document.querySelector("#nuevo-juego");
juego.addEventListener("click", function () {
    ocultar_etiqueta("juego");
});

var inicio = document.querySelector("#desistir");
inicio.addEventListener("click", function () {
    ocultar_etiqueta("inicio");
});

inicio = document.querySelector("#derecha");
inicio.addEventListener("click", function () {
    ocultar_etiqueta("inicio");
});

function ocultar_etiqueta(opcion) {
    if (opcion == "juego") {
        ocultarBox("none","block","none");
        limpiar();
        iniciar_canvas();
        activar_key();
    } else if (opcion == "menu") {
        ocultarBox("block","none","none");
        limpiar();
    } else {
        ocultarBox("none","none","block");
        limpiar();
    }
}


function ocultarBox(valor_menu,valor_juego,valor_inicio){
    document.getElementById("menu").style.display = valor_menu;
    document.getElementById("activar-juego").style.display = valor_juego;
    document.getElementById("iniciando").style.display = valor_inicio;
}

var validar_texto = document.querySelector("#texto");
validar_texto.setAttribute("maxLength",8)
validar_texto.addEventListener("keyup", function (event) {
    this.value = mayusculas(event.target.value);
});

function mayusculas(texto) {
    texto = texto.toUpperCase();
    if (texto.length != 9) {
        let validos = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        let text = ""
        for (let i of texto) {
            text += (validos.includes(i)) ? i : "";
        }
        return text;
    } else {
        return texto.substring(0, texto.length - 1);
    }
}
