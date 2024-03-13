

//Event bubbling


// const form = document.querySelector("form");
// const card = document.querySelector(".card");
// const cardBody = document.querySelector(".card-body");
// const container = document.querySelector(".container");

// form.addEventListener("click" , function(a)
// {
//     console.log("form");
//     a.stopPropagation(); //Kabarcıklanmayı durdurma!
// });

// form.addEventListener("click" , function(a)
// {
//     console.log("card body");
//     a.stopPropagation();
// });


// form.addEventListener("click" , function(a)
// {
//     console.log("card");
//     a.stopPropagation();
// });

// form.addEventListener("click" , function(a)
// {
//     console.log("container");
//     a.stopPropagation();
// },true);

// // event capturing - dıştan içe dogru kenetlenme

// form.addEventListener("click" , function(a)
// {
//     console.log("form");
//     a.stopPropagation(); //Kabarcıklanmayı durdurma!
// },true);

// form.addEventListener("click" , function(a)
// {
//     console.log("card body");
//     a.stopPropagation();
// },true);


// form.addEventListener("click" , function(a)
// {
//     console.log("card");
//     a.stopPropagation();
// },true);

// form.addEventListener("click" , function(a)
// {
//     console.log("container");
//     a.stopPropagation();
// },true);

// const deleteItems = document.querySelectorAll(".fa-times");


// deleteItems.forEach(function(item)
// {
//     item.addEventListener("click" , function(a)
//     {
//         console.log(a.target);
//         a.stopPropagation();
//     });
// });


//Event delegation

const ul =  document.querySelector("ul");

ul.addEventListener("click" , function(a)

{
    if(a.target.className === "fas fa-times")
    {
        a.target.parentElement.parentElement.remove();
        a.preventDefault();
    }
});