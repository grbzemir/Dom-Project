

//Elementlerin seçilmesi    

//Tek bir element seçme

//document.getElementById() metodu

let veri;

veri = document.getElementById("header");
veri = document.getElementById("header").id;
veri = document.getElementById("header").className;

veri = document.getElementById("header");

//veri = veri.id;
//veri = veri.className;

veri.style.color = "blue";
veri.style.fontSize = "50px";
veri.style.fontWeight = "bold";
//veri.style.display = "none"; görüntülüp görüntülenmeyeceğini gösterir

document.getElementById("header").innerText = "Yapilacaklar";
document.getElementById("header").innerHTML = "<b> Todo List </b>";



console.log(veri); // Çıktı: header




//document.querySelector() metodu

//console.log(document.querySelector("#header")); // Çıktı: <h1 id="header">...</h1>
//console.log(document.querySelector(".card-header")); // Çıktı: <div class="card-header">...</div>
//console.log(document.querySelector("div")); // Çıktı: <div>...</div>


// document.querySelector("li").style.color = "blue";
// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(2)").style.color = "yellow";

document.querySelector("li").className = "list-group-item list-group-item-danger";

document.querySelector("li").classList.add("active");


console.log(value); // Çıktı: <h1 id="header">...</h1>















































