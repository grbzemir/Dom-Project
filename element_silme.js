
//Element silme

const taskList = document.querySelector("#task-list");







//taskList.remove();


// taskList.childNodes[7].remove();

// taskList.children[3].remove();

// taskList.removeChild(taskList.children[3]);

//Attribute silme

taskList.children[0].removeAttribute("class");


let i;

for(i = 0 ; i < taskList.children.length ; i++)

{

    taskList.children[i].removeAttribute("class");

    taskList.children[i].removeAttribute("title");

    taskList.children[i].removeAttribute("data-id");

    taskList.children[i].removeAttribute("href");

    taskList.children[i].removeAttribute("target");

    taskList.children[i].removeAttribute("id");

    taskList.children[i].removeAttribute("style");
}








console.log(taskList);