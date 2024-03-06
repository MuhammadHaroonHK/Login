let changebtn = document.getElementById("modebtn");
let container = document.querySelector(".container");
let email=document.querySelector(".em input");
let password=document.querySelector(".ps input");
let login=document.getElementById("logbtn")


let mode="light";


changebtn.addEventListener("click" , () => {
    if(mode==="light"){
        mode="dark";
        document.body.style.background="white";
        container.classList.add("white");
        email.style.backgroundColor="white";
        email.style.color="black";
    
        password.style.backgroundColor="white";
        password.style.color="black";

        login.style.backgroundColor="white";
        login.style.color="black";
        login.style.border="2px solid black";

        changebtn.style.backgroundColor="white";
        changebtn.style.color="black";
        changebtn.style.border="2px solid black";
    }
   else{
    mode="light";
    document.body.style.background="black";
    container.classList.remove("white");
    email.style.backgroundColor="black";
        email.style.color="white";
    
        password.style.backgroundColor="black";
        password.style.color="white";

        login.style.backgroundColor="black";
        login.style.color="white";
        login.style.border="2px solid white";

        changebtn.style.backgroundColor="black";
        changebtn.style.color="white";
        changebtn.style.border="2px solid white";
   }
})