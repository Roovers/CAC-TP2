const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const total = document.getElementById('total');
const botonBorrar = document.getElementById('borrar');
const botonResumen = document.getElementById('resumen');
const valorInicial = 200;


   function calcular() {
    var cantidadSeleccionada = cantidad.value;
    var categoriaSeleccionada = categoria.value;

    if (cantidadSeleccionada <= 0) {
        alert("La cantidad de tickets seleccionados no es correcta.");
    } else {
        if (categoriaSeleccionada == 'estudiante') {
            descuento = (cantidadSeleccionada*valorInicial) * 0.8; 
            totalConDescuento = (cantidadSeleccionada*valorInicial) - descuento;
          } else if (categoriaSeleccionada == 'trainee') {
            descuento = (cantidadSeleccionada*valorInicial) * 0.5; 
            totalConDescuento = (cantidadSeleccionada*valorInicial) - descuento;
          } else {
            descuento = (cantidadSeleccionada*valorInicial) * 0.15;
            totalConDescuento = (cantidadSeleccionada*valorInicial) - descuento;
          }
          total.value = "Total a Pagar $" + totalConDescuento;
    }
  }

botonResumen.addEventListener('click', calcular);


function borrar() {
    total.value = "";
    cantidad.value = "";
  }

botonBorrar.addEventListener('click',borrar);







