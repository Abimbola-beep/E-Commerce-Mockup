document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("addToCartBtn");
    const msg = document.getElementById("cartMessage");

    btn.addEventListener("click", () => {
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 3000);
    });
});
