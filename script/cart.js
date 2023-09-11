const addToCartButtons = document.querySelectorAll(".price-button");

addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        const product = this.closest(".product");
        const productName = product.querySelector("h2").textContent;
        const productPrice = parseFloat(product.querySelector("button").textContent.replace("ราคา: ฿", "").replace(",", ""));

        const cartItem = {
            name: productName,
            price: productPrice
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));
        
        // เพิ่มการแจ้งเตือนเมื่อสินค้าถูกเพิ่มลงในตะกร้า
        alert("เพิ่มสินค้าลงในตะกร้าแล้ว!");
    });
});
