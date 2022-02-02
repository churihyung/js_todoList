const h1Title = document.getElementById("title");
h1Title.innerText = "change this";

document.title = "boom!";


const hellos = document.getElementsByClassName("hello");

for(const i of hellos){
    i.innerText = "Got you!" ;
}

const find = document.querySelectorAll(".find-hello h2");


// //window
// function handleWindowResize(){
//     document.body.style.backgroundColor="beige";
// }

// function handleWindowCopy(){
    
//     // 읽기
//     navigator.clipboard.readText().then((text) => {
//     });
// }

// //copy & paste 복사붙여넣기 출처남기기  어떻게 수정해야되지 
// function handleWindowPaste(){
//     //쓰기 
//     let copyText;
//     navigator.clipboard.readText().then((text) => {
//         copyText = text+ "[churihyung]붙여넣기 테스트";

//         navigator.clipboard.writeText(copyText).then(() => {
//         });
//     });
    
// }
// window.addEventListener("resize",handleWindowResize);
// window.addEventListener("copy",handleWindowCopy, true);
// window.addEventListener("paste",handleWindowPaste,true);

//h1 click 마다 color 바꾸기
//방법 1.
function handleH1BackColor(){
    const backColor = h1Title.style.color;
    let newColor
    if(backColor == 'tomato'){
        newColor = "teal";
    }
    else{
        newColor = "tomato";
    }
    h1Title.style.color = newColor;
}


//방법 2. javascript가 style에 관여를 적게
function handleH1BackColor(){
    // const clicked = "active"
    // if(h1Title.classList.contains(clicked)){
    //     h1Title.classList.remove(clicked);
    // }
    // else{
    //     h1Title.classList.add(clicked);
    // }

    //위에 코드 한줄로 처리가능함 string이 중복되면 변수로 만들어 진행
    h1Title.classList.toggle("active");
}






h1Title.addEventListener("click",handleH1BackColor);


