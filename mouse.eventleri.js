

//Mause eventeleri

const btn = document.querySelector("#btnDeleteAll");
const ul = document.querySelectorAll("#task-list");

// click event

// btn.addEventListener("click" ,run);
// btn.addEventListener("click" ,run);

// double click event

// btn.addEventListener("dblclick" ,run);


// mouse down event 

// btn.addEventListener("mousedown" ,run);

// mouse up event

// btn.addEventListener("mouseup" ,run);

// mouseentter event

// ul.addEventListener("mouseenter" ,run);

// // mause leave event

// ul.addEventListener("mouseleave" ,run);

// // mouse over event

// ul.addEventListener("mouseover" ,run);

// // mouse out event

// ul.addEventListener("mouseout" ,run);




// mouse move event

ul.addEventListener("mousemove" ,run);




function run(event)

{
    console.log(`event type: ${event.type}`);
}





