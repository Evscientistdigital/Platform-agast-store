let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCart();

function addCart(name,price){
    cart.push({name,price});
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCart();
    alert("Produk masuk keranjang");
}

function updateCart(){ document.getElementById("cart-count").innerText = cart.length; }
function openCart(){ 
    document.getElementById("cart-modal").style.display="flex"; 
    const list=document.getElementById("cart-items"); list.innerHTML=""; let total=0;
    cart.forEach((item,index)=>{ const li=document.createElement("li"); li.innerText=item.name+" - Rp "+item.price; list.appendChild(li); total+=item.price; });
    document.getElementById("total").innerText=total;
}
function closeCart(){ document.getElementById("cart-modal").style.display="none"; }

function checkout(){
    if(cart.length===0){ alert("Keranjang kosong!"); return; }
    const nomor="6281394832151"; let pesan="Hallo Admin Agast Store\n\nSaya mau checkout:\n\n"; let total=0;
    cart.forEach((item,index)=>{ pesan+=(index+1)+". "+item.name+" - Rp "+item.price+"\n"; total+=item.price; });
    pesan+="\nTotal: Rp "+total+"\n\nTerima kasih.";
    window.location.href="https://wa.me/"+nomor+"?text="+encodeURIComponent(pesan);
    cart=[]; localStorage.removeItem("cart"); updateCart(); closeCart();
}

function showLogin(){ document.getElementById("login-modal").style.display="flex"; }
function closeLogin(){ document.getElementById("login-modal").style.display="none"; }
function login(){ let user=document.getElementById("username").value; alert("Selamat datang "+user+" di Agast Store"); closeLogin(); }

function toggleSidebar(){ document.getElementById("sidebar-panel").classList.toggle("show"); }
function showSection(sectionId){ document.querySelectorAll('.sidebar-section').forEach(sec=>sec.classList.remove('active')); document.getElementById(sectionId).classList.add('active'); }
