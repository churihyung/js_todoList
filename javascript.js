const h1Title = document.getElementById("title");
h1Title.innerText = "change this";

document.title = "boom!";


const hellos = document.getElementsByClassName("hello");

for(const i of hellos){
    i.innerText = "Got you!" ;
}
debugger;
const find = document.querySelectorAll(".find-hello h2");
