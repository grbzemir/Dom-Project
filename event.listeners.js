

//Event listeners and event objesi

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");

// btn.addEventListener("click" , function()

// {

//     console.log("butona tiklandi")




// });

btn.addEventListener("click" , btnClick);
btn2.addEventListener("click" , btnClick);

function btnClick()

{

    console.log("butona tiklandi");

   
}


btn.addEventListener("click" , function(a)

{

   // a bir eventdir durumları temsil eder!
    
    let value;

    value = a;
    value = a.target;
    value = a.target.id;
    value = a.target.className;
    value = a.target.classList;
    value = a.type; 

    a.preventDefault(); //Varsayılanı engelle sayfayı reflesh yapmaz
    console.log(value);



});