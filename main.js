class Producto {
  constructor(nombre, precio, proceso) {
    this.nombre = nombre;
    this.precio = precio;
    this.proceso = proceso;
  }
}

let carrito = [];

const producto1 = new Producto("Handy Arc 162", 98000, "mma");
const producto2 = new Producto("LHN 240i Plus", 157900, "tig");
const producto3 = new Producto("Rogue ET 202iP", 276750, "mig");
const producto4 = new Producto("Renegade ET 300iP", 1436925, "tig");

let productos = [producto1, producto2, producto3, producto4];

function saludar() {
  let nombre = prompt("Ingrese su nombre, por favor.");
  alert("Bienvenido " + nombre + " a Electro MAP");
}

function comprarProductos(finalizarCompra = false) {
  producto = prompt(
    "Elija uno de nuestros productos \n 1: Handy Arc 162 \n 2: LHN 240i Plus \n 3: Rogue ET 202iP \n 4: Renegade ET 300iP \n 5: Buscar producto"
  );

  if (producto === "1") {
    carrito.push(productos[0]);
    alert("Usted ha agregado " + productos[0].nombre + " al carrito");
  } else if (producto === "2") {
    carrito.push(productos[1]);
    alert("Usted ha agregado " + productos[1].nombre + " al carrito");
  } else if (producto === "3") {
    carrito.push(productos[2]);
    alert("Usted ha agregado " + productos[2].nombre + " al carrito");
  } else if (producto === "4") {
    carrito.push(productos[3]);
    alert("Usted ha agregado " + productos[3].nombre + " al carrito");
  } else if (producto === "5") {
    buscarProducto();
  } else {
    alert("Opción inválida");
    comprarProductos();
    return;
  }

  if (!finalizarCompra) {
    mostrarMenu();
  }
}

function buscarProducto() {
  let busqueda = prompt("Ingrese el nombre del producto que desea buscar:");
  let productoEncontrado = productos.find(
    (producto) => producto.nombre.toLowerCase() === busqueda.toLowerCase()
  );

  if (productoEncontrado) {
    alert(
      "Producto encontrado: " +
        productoEncontrado.nombre +
        " - Precio: $" +
        productoEncontrado.precio
    );
  } else {
    alert("No se encontró ningún producto con ese nombre");
  }
}

function mostrarMenu() {
  opcion = prompt(
    "Elija una opción: \n 1: Agregar otro producto \n 2: Mostrar carrito \n 3: Finalizar compra \n 4: Ver ofertas \n 5: Buscar producto \n 6: Salir"
  );

  if (opcion === "1") {
    comprarProductos();
  } else if (opcion === "2") {
    mostrarCarrito();
  } else if (opcion === "3") {
    finalizarCompra();
  } else if (opcion === "4") {
    mostrarOferta();
    mostrarMenu();
  } else if (opcion === "5") {
    buscarProducto();
    mostrarMenu();
  } else if (opcion === "6") {
    return;
  } else {
    alert("Opción inválida");
    mostrarMenu();
  }
}

function mostrarCarrito(finalizarCompra = false) {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
  } else {
    let mensaje = "El contenido del carrito es: \n\n";
    let total = 0;

    carrito.forEach((producto) => {
      mensaje += producto.nombre + " - $" + producto.precio * 1.21 + "\n";
      total += producto.precio * 1.21;
    });

    mensaje += "\nTotal a pagar: $" + total;
    alert(mensaje);
  }

  if (!finalizarCompra) {
    mostrarMenu();
  }
}

function finalizarCompra() {
  mostrarCarrito(true);
  carrito = [];
}

var recibirOfertas = prompt(
  "¿Desea recibir ofertas por correo electrónico?"
).toLowerCase();

if (recibirOfertas === "si") {
  alert("Se enviarán ofertas por correo electrónico");
  var correoElectronico = prompt(
    "Por favor, introduzca su correo electrónico",
    "ejemplo@dominio.com"
  );
} else {
  alert("Gracias por su respuesta.");
}

function mostrarOferta() {
  const precioFiltro = 200000;
  const productosFiltrados = productos.filter(
    (producto) => producto.precio < precioFiltro
  );

  if (productosFiltrados.length > 0) {
    let mensaje =
      "OFERTA!!! Los siguientes productos tienen un precio inferior a $" +
      precioFiltro +
      ":\n\n";
    for (let i = 0; i < productosFiltrados.length; i++) {
      mensaje +=
        productosFiltrados[i].nombre +
        " - $" +
        productosFiltrados[i].precio +
        "\n";
    }
    alert(mensaje);
  } else {
    alert("No hay productos en oferta en este momento.");
  }
}

mostrarOferta();
saludar();
comprarProductos();
