const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form .todo-input");
const todoUl = document.querySelector(".todo-ul");
let todos = [];


function saveTodos(newTodoObj){
    todos.push(newTodoObj);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadTodos(){
    todos.forEach(list=>addTodoList(list));
    
}

//delete todoList
function delTodoList(event){
    const delLi = event.target.parentElement;
    const delId = delLi.id;
    //id가지고 todos 값 지우고 localStorage에 재저장
    debugger;
    todos = todos.filter((element)=>String(element.id) !== delId);
    localStorage.setItem("todos",JSON.stringify(todos));

    delLi.remove();
    //or todoUl.removeChild(delLi);
}

//add todoList
function addTodoList(newTodoObj){
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    const todoDelBtn = document.createElement("button");
    todoSpan.innerText = newTodoObj.text;
    //delete 할 때 값을 구분하기위해서 id값을 매핑
    todoLi.id = newTodoObj.id;
    todoDelBtn.innerText = "❌"
    todoDelBtn.addEventListener("click",delTodoList);
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoDelBtn);
    todoUl.appendChild(todoLi);
}



//localStorage.getItem('userName') 값이 없으면 toggle
const storageTodos = localStorage.getItem('todos');

if(storageTodos !== null){
    console.log( JSON.parse(storageTodos))
    todos = JSON.parse(storageTodos);
    loadTodos();
}

//todo form의 자동submit 막기
function handleTodoSubmit(event){
    event.preventDefault();
    const todoInputValue = todoInput.value;
    todoInput.value = null;
    const newTodoObj = {
        text : todoInputValue,
        id : Date.now()
    };
    saveTodos(newTodoObj);
    addTodoList(newTodoObj);
}

todoForm.addEventListener("submit",handleTodoSubmit);