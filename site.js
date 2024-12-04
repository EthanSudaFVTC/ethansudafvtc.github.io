// console.log('Test') // Tests to see if site.js is linked correctly

// const hours = new Date().getHours() // get the current hour

// const isMorning = hours >= 4 && hours < 12 // is it morning?
// const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
// const isEvening = hours >= 17 || hours < 4 // is it evening?

// const welcomeMessage = document.getElementById('welcome') // puts welcome div in variable

// // checks times to add correct message
// if (isMorning)
// {
//     welcomeMessage.textContent = "Good Morning"
// }
// else if (isAfternoon)
// {
//         welcomeMessage.textContent = "Good Afternoon"
// }
// else if (isEvening)
// {
//     welcomeMessage.textContent = "Good Evening"
// }


// // secret message

// localStorage.setItem('It\'s a secret to everybody.', 'This is my super secret message. Don\'t share it, or else...')



// Assignment 5 - Carousel code

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()


// Code added by me to make carousel work


const updateImage = (direction) => {
    currentImage = (currentImage + direction)
    showImages()
}


// add event listeners to the buttons
document.getElementById('prev').addEventListener('click', () => updateImage(-1))
document.getElementById('next').addEventListener('click', () => updateImage(1))

// slideshow picures every few seconds 
setInterval(() => {
    currentImage++
    showImages()
}, 5000)



/* // -------
// --- To Do List ---
// -------

// get list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

// create consts
const todoList = document.getElementById('todo-list')
const input = document.getElementById('new-todo')
const addButton = document.getElementById('add-todo')

// create/add list items
const renderTodos = () => {
    // clear li's before we recreate them
    todoList.innerHTML = ''
    // loop through list of items and create li elements
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        li.className = 'todo'
        todoList.append(li)
    })
}

// add event listener to the button
addButton.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        todos.push({ text: input.value, completed: false })
        localStorage.setItem('todo-list', JSON.stringify(todos))
        
        input.value = ''
        renderTodos()
    }
})

renderTodos() */