

// --tek element seçimi
// document.getElementById()
// document.querySelector()


// --Coklu element seçimi--
// document.getElementByClassName()

let veri;

veri = document.getElementsByClassName("list-group-item");
// veri = document.getElementsByClassName("list-group-item")[0];
// veri = document.getElementsByClassName("list-group-item")[1];

//veri = veri[2];

veri[1].style.fontsize = "25px";
veri[1].style.color = "blue";
veri[2].textContent = "Task Item";


let i;

for(i = 0; i < veri.length; i++)

{

    console.log(veri[i].style.color = "orange");
    console.log(veri[i].textContent = "New Item");
    console.log(veri[i].style.fontSize = "25px");


}


// document.getElementsByTagName()

veri = document.getElementsByTagName("li");
veri = document.getElementsByTagName("a");

veri = document.getElementById("task-list").getElementsByTagName("a");

//document.querySelectorAll() metodu

veri = document.querySelectorAll("li");

veri.forEach(function(item , index)
{

    
    item.textContent = `${index} - item`;
    


});



console.log(veri);




