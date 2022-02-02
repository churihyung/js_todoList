const h1Title = document.getElementById("title");
h1Title.innerText = "change this";

document.title = "boom!";


const hellos = document.getElementsByClassName("hello");

for(const i of hellos){
    i.innerText = "Got you!" ;
}

const find = document.querySelectorAll(".find-hello h2");

function h1mouseOver(){
    h1Title.style.fontSize = "40px";
}

h1Title.addEventListener("click",()=>alert("bow!"));
h1Title.addEventListener("mouseover",h1mouseOver);
