// Lista de productos disponibles
const productos = [
  {
    nombre: "Zapato negro",
    tipo: "zapato",
    color: "negro",
    img: "./taco-negro.jpg",
  },
  {
    nombre: "Zapato azul",
    tipo: "zapato",
    color: "azul",
    img: "./taco-azul.jpg",
  },
  {
    nombre: "Bota negra",
    tipo: "bota",
    color: "negro",
    img: "./bota-negra.jpg",
  },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  {
    nombre: "Zapato rojo",
    tipo: "zapato",
    color: "rojo",
    img: "./zapato-rojo.jpg",
  },
];

// Obtenemos el contenedor de productos y el input de búsqueda
const li = document.getElementById("lista-de-productos");
const $i = document.getElementById("input");

// Función para mostrar productos en pantalla
function displayProductos(productosAMostrar) {
  // Limpiamos el contenedor antes de mostrar nuevos productos
  li.innerHTML = "";
  // Recorremos el arreglo y creamos los elementos para cada producto
  for (let i = 0; i < productosAMostrar.length; i++) {
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosAMostrar[i].nombre;

    var imagen = document.createElement("img");
    imagen.setAttribute("src", productosAMostrar[i].img);

    d.appendChild(ti);
    d.appendChild(imagen);

    li.appendChild(d);
  }
}

// Mostramos todos los productos al cargar la página
displayProductos(productos);

// Obtenemos el botón de filtrar
const botonDeFiltro = document.querySelector("button");

// Al hacer clic en el botón, filtramos y mostramos los productos
botonDeFiltro.onclick = function () {
  // Obtenemos el texto ingresado y lo normalizamos
  const texto = $i.value.trim().toLowerCase();
  // Filtramos los productos según el texto
  const productosFiltrados = filtrado(productos, texto);
  // Mostramos los productos filtrados
  displayProductos(productosFiltrados);
};

// Función para filtrar productos por tipo o color (ignorando mayúsculas/minúsculas)
const filtrado = (productos = [], texto) => {
  return productos.filter(
    (item) =>
      item.tipo.toLowerCase().includes(texto) ||
      item.color.toLowerCase().includes(texto)
  );
};
