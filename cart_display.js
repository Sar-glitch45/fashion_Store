document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalContainer = document.getElementById("cart-total");

    // Obtener el carrito desde localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Mostrar los productos en la tabla
    let total = 0;
    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Q${item.price.toFixed(2)}</td>
            <td>
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Eliminar</button>
            </td>
        `;
        cartItemsContainer.appendChild(row);
        total += item.price;
    });

    // Mostrar el total
    cartTotalContainer.textContent = `Q${total.toFixed(2)}`;

    // Manejar la eliminación de productos
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1); // Eliminar del carrito
            localStorage.setItem("cart", JSON.stringify(cart)); // Actualizar localStorage
            location.reload(); // Recargar la página
        });
    });

    // Botón de "Realizar Compra"
    document.getElementById("checkout").addEventListener("click", () => {
        alert("Gracias por tu compra!");
        localStorage.removeItem("cart"); // Vaciar el carrito
        location.reload(); // Recargar la página
    });
});
