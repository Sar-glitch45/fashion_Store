// cart.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-name");
            const productPrice = button.getAttribute("data-price");

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ name: productName, price: parseFloat(productPrice) });
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} ha sido añadido al carrito.`);
        });
    });
});

