(()=>{"use strict";const e=(e,t)=>{let n=document.createElement("p");return n.setAttribute("id",e),n.textContent=t,n},t=()=>{let e=document.getElementById("main");e.innerHTML="",e.appendChild((()=>{let e=document.createElement("h3");return e.textContent="Welcome to the Odin Restaurant!",e})()),e.appendChild((()=>{let e=document.createElement("p");return e.textContent="Taste the best cuisine of the mediterranean...",e})())},n=[{name:"Tuna Pasta",img_url:"https://www.themediterraneandish.com/wp-content/uploads/2020/03/tuna-pasta-recipe-3.jpg"},{name:"Gambas al Ajillo (Spanish Garlic Shrimp)",img_url:"https://www.themediterraneandish.com/wp-content/uploads/2020/11/gambas-al-ajillo-spanish-shrimp-recipe-7-720x722.jpg"},{name:"Slow Roasted Salmon",img_url:"https://www.themediterraneandish.com/wp-content/uploads/2020/10/slow-roasted-salmon-recipe-6-720x722.jpg"},{name:"Mediterranean Garlic Shrimp Pasta Recipe",img_url:"https://www.themediterraneandish.com/wp-content/uploads/2020/09/shrimp-pasta-recipe-4-720x722.jpg"},{name:"Quick & Healthy Greek Salmon Salad",img_url:"https://www.themediterraneandish.com/wp-content/uploads/2020/09/mediterranean-steamed-clams-recipe-7-720x722.jpg"},{name:"Mediterranean-Style Steamed Clams Recipe",img_url:"https://www.themediterraneandish.com/wp-content/uploads/2019/08/Salmon-salad-recipe-8-720x722.jpg"}];(()=>{const t=document.getElementById("content");t.appendChild((()=>{let t=document.createElement("nav"),n=document.createElement("div");n.classList.add("nav-links"),n.appendChild(e("home","Home")),n.appendChild(e("menu","Menu")),n.appendChild(e("contact","Contact"));let a=document.createElement("div");return a.classList.add("logo"),a.innerHTML="<h1> Odin<span>Restaurant</span></h1>",t.appendChild(a),t.appendChild(n),t})()),t.appendChild((()=>{let e=document.createElement("header"),t=document.createElement("h2");t.textContent="The Best Sea Food";let n=document.createElement("a");return n.textContent="Book Your Table",e.appendChild(t),e.appendChild(n),e})());let n=document.createElement("section");n.setAttribute("id","main"),t.appendChild(n)})(),t(),document.getElementById("home").onclick=t,document.getElementById("menu").onclick=()=>{let e=document.getElementById("main");e.innerHTML="<h3>Our Menu</h3>",e.appendChild((()=>{let e=document.createElement("div");return e.classList.add("menu-wrapper"),n.forEach((t=>e.appendChild((e=>{let t=document.createElement("div");t.classList.add("menu-item");let n=document.createElement("img");n.setAttribute("src",e.img_url);let a=document.createElement("p");return a.textContent=e.name,t.appendChild(n),t.appendChild(a),t})(t)))),e})())},document.getElementById("contact").onclick=()=>{let e=document.getElementById("main");e.innerHTML="<h3>Contact Us</h3>";let t=document.createElement("a");t.textContent="info@odinrestaurant.com",t.setAttribute("href","#"),e.appendChild(t)}})();