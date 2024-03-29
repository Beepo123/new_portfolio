import { addItemToList, removeItemInList, todoList } from "./list.js";

document.addEventListener('DOMContentLoaded', ()=>{
  renderTodo();
})

// handles all click inside the app
document.querySelector('.todo-app')
  .addEventListener('click', (event) => {
  // If add button is clicked
  if (event.target.id === 'add-button') {
    addItemToList(document.getElementById('input-box').value);
    renderTodo();
    document.getElementById('input-box').value = '';
  }

  // If list item is clicked
  if (event.target.closest('li')){
    const listItem = event.target.closest('li');
    listItem.classList.toggle('checked');
  }

  // If delete button is clicked call the delete function
  // and pass the reference for list element parent of button
  if (event.target.closest('.delete-button')){
    deleteItem(event.target.closest('li'));
    renderTodo();
  }
});

function renderTodo(){
  let todoHTML = '';
  todoList.forEach(todo =>{
    const html = `
      <li>
        ${todo}
        <button class="delete-button">X</button>
      </li>
      
    `;
    todoHTML += html;
  })
  document.getElementById('list-container').innerHTML = todoHTML;
}


/*
  This function will receive a reference to the list element
  to be used to find its index among all list elements and index will be
  passed to the removeItemInList function
*/
function deleteItem(liElement){
  const lists = document.querySelectorAll('li');
  lists.forEach((item, index) => {
    if(item === liElement){
      console.log(`index: ${index}`)
      removeItemInList(index);
      return;
    }
  })
}