let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

/* Tambah ke keranjang */
function addCart(name,price){
    cart.push({name,price});
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCart();
    alert("Produk masuk keranjang");
}

/* Update jumlah keranjang di header */
function updateCart(){
    document.getElementById("cart-count").innerText = cart.length;
}

/* Buka modal keranjang */
function openCart(){
    document.getElementById("cart-modal").style.display="block";
    let list = document.getElementById("cart-items");
    list.innerHTML="";
    let total=0;
    cart.forEach(item=>{
        let li=document.createElement("li");
        li.innerText = item.name + " - Rp " + item.price;
        list.appendChild(li);
        total += item.price;
    });
    document.getElementById("total").innerText = total;
}

/* Tutup modal keranjang */
function closeCart(){
    document.getElementById("cart-modal").style.display="none";
}

/* Checkout ke WhatsApp */
function checkout(){
    if(cart.length === 0){
        alert("Keranjang kosong!");
        return;
    }

    let nomor = "6281394832151"; // WA format internasional

    let pesan = "Hallo Admin Agast Store\n\n";
    pesan += "Saya mau checkout:\n\n";

    let total = 0;

    cart.forEach((item,index)=>{
        pesan += (index+1) + ". " + item.name + " - Rp " + item.price + "\n";
        total += item.price;
    });

    pesan += "\nTotal: Rp " + total;
    pesan += "\n\nTerima kasih.";

    // Buka WhatsApp di tab yang sama agar tidak diblokir pop-up
    window.location.href = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);

    // Reset keranjang
    cart = [];
    localStorage.removeItem("cart");
    updateCart();
    closeCart();
}

/* Login sederhana */
function showLogin(){
    document.getElementById("login-modal").style.display="block";
}

function closeLogin(){
    document.getElementById("login-modal").style.display="none";
}

function login(){
    let user = document.getElementById("username").value;
    alert("Selamat datang "+user+" di Agast Store");
    closeLogin();
}
