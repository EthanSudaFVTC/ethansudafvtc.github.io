// get list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// create consts
const todoList = document.getElementById('todo-list')
const input = document.getElementById('new-todo')
const addButton = document.getElementById('add-todo')


// create/add list items
const renderTodos = () => {
    // clear li's before recreating them
    todoList.innerHTML = ''
    // loop through list of items and create li elements
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        li.className = 'todo'
        todoList.append(li)
    })
}

// button event listener
addButton.addEventListener('click', () => {
    if (input.value) {
        todos.push({ text: input.value, completed: false });
        localStorage.setItem('todo-list', JSON.stringify(todos));
        input.value = '';
        renderTodos();
    }
});
renderTodos()