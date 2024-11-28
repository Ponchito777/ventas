// Carrito inicial vacío
let cart = [];
// Función para agregar un producto al carrito
function addToCart(productName, productPrice) {
// Selecciona la cantidad del producto
const quantity = parseInt(event.target.previousElementSibling.value);

// Revisa si el producto ya está en el carrito
const existingProduct = cart.find(item => item.name === productName);

if (existingProduct) {
// Si el producto ya está, incrementa su cantidad
existingProduct.quantity += quantity;
} else {
// Si el producto no está, lo agrega al carrito
cart.push({ name: productName, price: productPrice, quantity: quantity });
}

// Actualiza el carrito en la interfaz
updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
const cartItems = document.getElementById('cartItems');
const total = document.getElementById('total');

// Vacía la lista del carrito antes de agregar los elementos
cartItems.innerHTML = '';

// Recorre los productos en el carrito y actualiza la lista
let totalAmount = 0;
cart.forEach((item, index) => {
const itemTotal = item.price * item.quantity;
totalAmount += itemTotal;

// Agrega el elemento a la lista
const li = document.createElement('li');
li.innerText = `${item.name}
$${item.price} x ${item.quantity} = $${itemTotal}`;
// Botón para eliminar el producto del carrito
const removeButton = document.createElement('button');
removeButton.innerText = "Eliminar";
removeButton.classList.add("remove-item");
removeButton.onclick = () => removeFromCart(index);

li.appendChild(removeButton);
cartItems.appendChild(li);
});

// Muestra el total de la compra
total.innerText = `Total: $${totalAmount}`;
}

// Función para eliminar un producto específico del carrito
function removeFromCart(index) {
cart.splice(index, 1);
updateCart();
}

// Función para vaciar el carrito
function clearCart() {
cart = [];
updateCart();
}