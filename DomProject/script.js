
// Todo Eleman Ekleme

// Eleman Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["Todo 1","Todo 2","Todo 3","Todo 4","Todo 5","Todo 6"];

//load items

loadItems();


eventListeners();

function eventListeners()
{
    
    //submit event
    form.addEventListener("submit",addNewItem);
    // delete an item
    taskList.addEventListener("click",deleteItem); 

}

function loadItems()

{
    
        items.forEach(function(item)
        {
            createItem(item);
        });
    
    
}

function createItem(text)
{
    //li oluşturma
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));

    //a oluşturma
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    //a yi li ye ekleme

    li.appendChild(a);

    //li yi ul ye ekleme

    taskList.appendChild(li);

}

function addNewItem(e)
{

    if(input.value ==='')
    {

        alert("add new item");
        //console.log("submit");
    }

    //create Item

    createItem(input.value);


    input.value = "";

    e.preventDefault();

   
}


// deleting an element

function deleteItem(e) 
{

    if (e.target.className == "fas fa-times") 
    
    {
    
    console.log(e.target);
    
    if (confirm("Are you sure you want to delete?")) 
    
    {
    
    e.target.parentElement.parentElement.remove();
    
            }
    
        }
    
    e.preventDefault(); // a etiketinin default işlevini kaldırır.
    
    } 


    // tüm elemanları silmek

    function deleteAllItems(e)

    {


        if(confirm("Are you sure you want to delete all items?"))
        {
            taskList.childNodes.forEach(function(item)
            {
                if(item.nodeType === 1)
                {
                    item.remove();
                }
            });
            taskList.innerHTML = "";
        }
    }





