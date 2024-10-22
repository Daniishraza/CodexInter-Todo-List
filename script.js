
const newTodoInput = document.getElementById("newTodo");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

let todos = [];

addTodoBtn.addEventListener("click", function () {
    const todoText = newTodoInput.value;
    if (todoText !== "") {
        const newTodo = {
            text: todoText,
            completed: false,
        };
        todos.push(newTodo);
        newTodoInput.value = "";
        renderTodos();
    }
});


function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
        const todoItem = document.createElement("li");
        todoItem.classList.toggle("completed", todo.completed);

        const todoText = document.createElement("span");
        todoText.textContent = todo.text;
        todoItem.appendChild(todoText);

        const actions = document.createElement("div");
        actions.classList.add("todo-actions");

        const markBtn = document.createElement("button");
        markBtn.classList.add("mark-btn");
        markBtn.textContent = todo.completed ? "Unmark" : "Mark";
        markBtn.addEventListener("click", function () {
            todos[index].completed = !todos[index].completed;
            renderTodos();
        });
        actions.appendChild(markBtn);

        const updateBtn = document.createElement("button");
        updateBtn.classList.add("update-btn");
        updateBtn.textContent = "Update";
        updateBtn.addEventListener("click", function () {
            const newTodoText = prompt("Update todo:", todo.text);
            if (newTodoText !== null && newTodoText.trim() !== "") {
                todos[index].text = newTodoText;
                renderTodos();
            }
        });
        actions.appendChild(updateBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            todos.splice(index, 1);
            renderTodos();
        });
        actions.appendChild(deleteBtn);

        todoItem.appendChild(actions);
        todoList.appendChild(todoItem);
    });
}
