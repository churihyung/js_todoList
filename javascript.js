const h1Title = document.getElementById("title");
h1Title.innerText = "change this";

document.title = "boom!";


const hellos = document.getElementsByClassName("hello");

for(const i of hellos){
    i.innerText = "Got you!" ;
}

const find = document.querySelectorAll(".find-hello h2");

function handleh1mouseOver(){
    h1Title.style.fontSize = "40px";
}

h1Title.addEventListener("click",()=>{
                          console.log("click!!")});
h1Title.addEventListener("mouseover",handleh1mouseOver);


//window
function handleWindowResize(){
    document.body.style.backgroundColor="beige";
}

function handleWindowCopy(){
    
    // 읽기
    navigator.clipboard.readText().then((text) => {
    });
}

//copy & paste 복사붙여넣기 출처남기기  어떻게 수정해야되지 
function handleWindowPaste(){
    //쓰기 
    let copyText;
    navigator.clipboard.readText().then((text) => {
        copyText = text+ "[churihyung]붙여넣기 테스트";

        navigator.clipboard.writeText(copyText).then(() => {
        });
    });
    
}
window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy, true);
window.addEventListener("paste",handleWindowPaste,true);

