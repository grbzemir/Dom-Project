
//Element güncelleme


const cardHeader = document.querySelector(".card-header");

const h2 = document.createElement("h2");

h2.setAttribute("class" , "card-header");
h2.appendChild(document.createTextNode("My List"));

const parent = document.querySelector(".card");

parent.replaceChild(h2 , cardHeader); // güncelleme yapma işlemi



// Class'larda güncelleme


const taskList = document.quarySelector("#task-list");


let value;


link = taskList.children[0].children[0];

value = link.className;
value = link.classList;
value = link.classList[0];

link.classList.add("new");


//Attribute güncelleme


value = link.getAttribute("data-id");
value = link.getAttribute("href");
value = link.getAttribute("class");


link.setAttribute("href" , "http://www.google.com");

value = link.hasAttribute("href");



console.log(value);