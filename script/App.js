//Declaro mis variables que leen los elementos del DOM
let tickets = document.getElementById("cantidadTickets");
let categoria = document.getElementById("categoria");
let nombreVenta;
let apellidoVenta;
let emailVenta;
let enviarVenta = document.getElementById("enviarVenta");
let borrarVenta = document.getElementById("borrarVenta");

//Datos del primer formulario
let enviarCharla = document.getElementById("enviarCharla");
let nombreOrador;
let apellidoOrador;
let aboutCharla;
//Declaro el precio del ticket base
let precioTicket = 200;

//Declaro mis variables vacias que van a recibir el valor de los inputs
let cantidadTickets;
let precioDescuento;
let precioTotal;

//Funcion que actualiza los datos del formulario de entradas
const datosEntradas = () => {
  nombreVenta = document.getElementById("nombreVenta").value;
  apellidoVenta = document.getElementById("apellidoVenta").value;
  emailVenta = document.getElementById("emailVenta").value;
};

//Funcion que actualiza los datos del formulario
const datosOrador = () => {
  nombreOrador = document.getElementById("nombreOrador").value;
  apellidoOrador = document.getElementById("apellidoOrador").value;
  aboutCharla = document.getElementById("aboutCharla").value;
};

//Funcion que calcula el descuento
const calcularDescuento = () => {
  switch (categoria.value) {
    case "estudiante":
      precioDescuento = precioTicket - precioTicket * 0.8;
      break;
    case "trainee":
      precioDescuento = precioTicket - precioTicket * 0.5;
      break;
    case "junior":
      precioDescuento = precioTicket - precioTicket * 0.15;
      break;
    default:
      precioDescuento = precioTicket;
      break;
  }
};

//Funcion que calcula el precio total
const calcularPrecio = () => {
  calcularDescuento();
  cantidadTickets = tickets.value;
  precioTotal = precioDescuento * cantidadTickets;
  let precioFinal = document.getElementById("total");
  precioFinal.innerHTML = precioTotal;
  console.log(precioTotal);
};

//Funcion que escucha los cambios en el input de cantidad de tickets y ejecuta la funcion calcularPrecio
tickets.addEventListener("change", function () {
  cantidadTickets = tickets.value;
  console.log(cantidadTickets);
  calcularPrecio();
});

//Funcion que escucha los cambios en el input de categoria y ejecuta la funcion calcularPrecio
categoria.addEventListener("change", function () {
  tipoComprador = categoria.value;
  console.log(tipoComprador);
  calcularPrecio();
});

//Funcion que escucha el click en el boton de enviar y envía los datos a la base de datos (que de momento no existe)
enviarVenta.addEventListener("click", function (e) {
  e.preventDefault();
  datosEntradas();
  calcularPrecio();
  if (window.confirm("¿Desea confirmar la compra?")) {
    let datos = {
      nombre: nombreVenta,
      apellido: apellidoVenta,
      email: emailVenta,
      cantidad: cantidadTickets,
      categoria: categoria.value,
      precio: precioTotal,
    };
    console.log(datos);
    alert("Compra realizada con exito");
  }

  /* aquí iria la funcion que envia los datos al backend, pero no tenemos backend
  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
*/
});

//Funcion que escucha el click en el boton de borrar y borra los datos de los inputs haciendo un reload de la página
borrarVenta.addEventListener("click", function (e) {
  e.preventDefault();
  if (window.confirm("¿Desea borrar los datos?")) {
    location.reload();
  }
});

//Funcion que escucha el click en el boton de enviar y envía los datos a la base de datos (que de momento no existe)
enviarCharla.addEventListener("click", function (e) {
  e.preventDefault();
  datosOrador();
  if (window.confirm("¿Desea enviar su propuesta?")) {
    let datos = {
      nombre: nombreOrador,
      apellido: apellidoOrador,
      charla: aboutCharla,
    };
    console.log(datos);
    alert("Propuesta enviada con exito");
  }

  /* aquí iria la funcion que envia los datos al backend, pero no tenemos backend
    fetch("", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
    */
});
