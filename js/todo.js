const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form .todo-input");
const todoUl = document.querySelector(".todo-ul");

console.log(todoForm,todoInput,todoUl);

//add todoList
function addTodoList(todoInputValue){
    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    const todoDelBtn = document.createElement("button");
    todoSpan.innerText = todoInputValue;
    todoDelBtn.innerText = "X"
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoDelBtn);
    todoUl.appendChild(todoLi);
}

//todo form의 자동submit 막기
function handleTodoSubmit(event){
    event.preventDefault();
    const todoInputValue = todoInput.value;
    todoInput.value = null;
    addTodoList(todoInputValue);
}

todoForm.addEventListener("submit",handleTodoSubmit);