let carrito = [];

function agregarAlCarrito(nombre, precio, idCantidad) {
  const cantidad = parseInt(document.getElementById(idCantidad).value);
  const itemExistente = carrito.find(item => item.nombre === nombre);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({ nombre, precio, cantidad });
  }

  actualizarCarrito();
}

function abrirCarrito() {
  document.getElementById('cart').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function cerrarCarrito() {
  document.getElementById('cart').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

function actualizarCarrito() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');
  cartItems.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    cartItems.innerHTML += `
      <div>
        ${item.nombre} x ${item.cantidad} - $${subtotal.toFixed(2)}
        <button onclick="eliminarProducto(${index})">Eliminar</button>
      </div>
    `;
  });

  totalPrice.textContent = total.toFixed(2);
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function mostrarFormulario() {
  cerrarCarrito();
  document.getElementById('form-compra').style.display = 'block';
}

function cerrarFormulario() {
  document.getElementById('form-compra').style.display = 'none';
}

function confirmarCompra() {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const direccion = document.getElementById('direccion').value.trim();

  if (nombre && correo && direccion) {
    alert('¡Gracias por tu compra, Te enviaremos un mensaje de confirmación a tu correo.');
    carrito = [];
    actualizarCarrito();
    cerrarFormulario();
  } else {
    alert('Por favor completa todos los campos.');
  }
}


    