
//Keybord eventleri


const text = document.getElementById("txtTaskName");


//Focus

// text.addEventListener("focus" , run);

//blur 

// text.addEventListener("blur" , run);

// paste

// text.addEventListener("paste" , run);

// copy

// text.addEventListener("copy" , run);

// cut

// text.addEventListener("cut" , run);

// select

// text.addEventListener("select" , run);

// KeyDown

// text.addEventListener("keydown" , run);

// KeyUp

text.addEventListener("keyup" , run);

function run(e)

{

    console.log(e.type);
    console.log(e.target.value);
}

