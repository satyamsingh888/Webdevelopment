//Select dom elements

const input = document.getElementById('todo-input')
const btn = document.getElementById('add-btn')
const list= document.getElementById('todo-list')

//Try to load saved todos from localStorage(if any)
const saved = localStorage.getItem('todos');
const todos = saved?JSON.parse(saved) : [];
function saveTodos(){
    //save current todos array to localStorage
    localStorage.setItem('todos',JSON.stringify(todos))
}

//create a dom node for todo object and append it to the list --
function createTodoNode(todo,index){

}

//Render the whole list from todo  array
function render(){
    
}