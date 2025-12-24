let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}

function loadCart() {
    let list = document.getElementById("cartItems");
    let total = 0;

    if (!list) return;

    list.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - R${item.price}`;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").textContent = "Total: R" + total;
}

const orderRef =
    "KC-" + Math.floor(100000 + Math.random() * 900000);

<script>
document.getElementById("checkoutOrderRef").textContent =
    localStorage.getItem("orderRef");
</script>


loadCart();
