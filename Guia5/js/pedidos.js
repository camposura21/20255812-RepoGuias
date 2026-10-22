let pedidos = [];

const formPedido = document.querySelector("#formPedido");
const inputProducto = document.querySelector("#inputProducto");
const inputPrecio = document.querySelector("#inputPrecio");
const inputCantidad = document.querySelector("#inputCantidad");
const inputPrecioMaximo = document.querySelector("#inputPrecioMaximo");
const cuerpoPedidos = document.querySelector("#idCuerpoPedidos");
const totalUnidades = document.querySelector("#idTotalUnidades");
const totalMonto = document.querySelector("#idTotalMonto");
const btnFiltrar = document.querySelector("#btnFiltrar");
const btnMostrarTodos = document.querySelector("#btnMostrarTodos");
const btnLimpiar = document.querySelector("#btnLimpiar");

function calcularSubtotal(pedido) {
  return pedido.precio * pedido.cantidad;
}

function filtrarPorPrecioMaximo(lista, precioMaximo) {
  return lista.filter((pedido) => pedido.precio <= precioMaximo);
}

function calcularTotalUnidades(lista) {
  return lista.reduce((acumulado, pedido) => acumulado + pedido.cantidad, 0);
}

function calcularTotalMonto(lista) {
  return lista.reduce((acumulado, pedido) => acumulado + calcularSubtotal(pedido), 0);
}

function construirFilasTabla(lista) {
  return lista
    .map(
      (pedido) => `
        <tr>
          <td>${pedido.producto}</td>
          <td>$${pedido.precio.toFixed(2)}</td>
          <td>${pedido.cantidad}</td>
          <td>$${calcularSubtotal(pedido).toFixed(2)}</td>
        </tr>`
    )
    .join("");
}

function renderizarTabla(lista) {
  cuerpoPedidos.innerHTML = construirFilasTabla(lista);
}

function actualizarTotales() {
  totalUnidades.textContent = calcularTotalUnidades(pedidos);
  totalMonto.textContent = calcularTotalMonto(pedidos).toFixed(2);
}

function validarPedido(producto, precio, cantidad) {
  if (producto.trim() === "") {
    alert("El nombre del producto no puede estar vacío");
    return false;
  }
  if (isNaN(precio) || precio <= 0) {
    alert("El precio debe ser un número mayor a cero");
    return false;
  }
  if (!Number.isInteger(cantidad) || cantidad <= 0) {
    alert("La cantidad debe ser un número entero positivo");
    return false;
  }
  return true;
}

function manejarEnvioFormulario(evento) {
  evento.preventDefault();

  const producto = inputProducto.value;
  const precio = parseFloat(inputPrecio.value);
  const cantidad = parseInt(inputCantidad.value, 10);

  if (!validarPedido(producto, precio, cantidad)) {
    return;
  }

  pedidos.push({ producto, precio, cantidad });

  renderizarTabla(pedidos);
  actualizarTotales();
  formPedido.reset();
}

function manejarFiltro() {
  const precioMaximo = parseFloat(inputPrecioMaximo.value);

  if (isNaN(precioMaximo) || precioMaximo <= 0) {
    alert("Ingrese un precio máximo válido");
    return;
  }

  renderizarTabla(filtrarPorPrecioMaximo(pedidos, precioMaximo));
}

function manejarMostrarTodos() {
  renderizarTabla(pedidos);
}

function manejarLimpiarPedidos() {
  pedidos = [];
  renderizarTabla(pedidos);
  actualizarTotales();
}

formPedido.addEventListener("submit", manejarEnvioFormulario);
btnFiltrar.addEventListener("click", manejarFiltro);
btnMostrarTodos.addEventListener("click", manejarMostrarTodos);
btnLimpiar.addEventListener("click", manejarLimpiarPedidos);
