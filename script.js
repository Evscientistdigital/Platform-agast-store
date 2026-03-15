let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCart();

function addCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

alert("Produk masuk keranjang");

}

function updateCart(){

document.getElementById("cart-count").innerText = cart.length;

}

function openCart(){

document.getElementById("cart-modal").style.display="block";

let list = document.getElementById("cart-items");

list.innerHTML="";

let total=0;

cart.forEach(item=>{
let li=document.createElement("li");
li.innerText=item.name+" - Rp "+item.price;
list.appendChild(li);
total+=item.price;
});

document.getElementById("total").innerText=total;

}

function closeCart(){
document.getElementById("cart-modal").style.display="none";
}

function checkout(){

if(cart.length === 0){
alert("Keranjang kosong!");
return;
}

let produk = cart.map(item => item.name).join(" atau ");

let pesan = "Hallo saya mau checkout " + produk;

let nomor = "6281394832151";

let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);

window.open(url,"_blank");

/* reset keranjang */

cart=[];
localStorage.removeItem("cart");

updateCart();

closeCart();

}

function showLogin(){
document.getElementById("login-modal").style.display="block";
}

function closeLogin(){
document.getElementById("login-modal").style.display="none";
}

function login(){

let user=document.getElementById("username").value;

alert("Selamat datang "+user+" di Agast Store");

closeLogin();

}
