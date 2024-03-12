
//Elementler üzerinde gezinme


let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const card = document.querySelector(".card");

value = todoList;
value = todo;
value = card;

//Child Nodes

value = todoList.childNodes; //text dahil


value = todoList.children; //text dahil değil

value = todoList.children[0].textContent = "Değişti";

value = todoList.children[todoList.children.length-1];

value = todoList.children[1].textContent = "Değişti";


value = card;
value = card.children;


value = card.children[1].children[0].textContent = "Merhaba";

value = todoList;
//value = todoList.firstElementChild[0];
value = todoList.firstElementChild;
value = todoList.lastElementChild;

value = todoList.children.length;
value = todoList.childElementCount;

value = card;
value = card.parentElement;
value = card.parentElement.parentElement;

value = todo;

value = todo.previousElementSibling; // önceki kardeşe geçiş
value = todo.nextElementSibling; // sonraki kardeşe geçiş

value = todo.nextElementSibling.nextElementSibling; // 2 sonraki kardeşe geçiş

value = todo.previousElementSibling.previousElementSibling; // 2 önceki kardeşe geçiş








console.log(value);