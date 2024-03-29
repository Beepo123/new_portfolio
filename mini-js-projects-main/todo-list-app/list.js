export const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

export function addItemToList(item){
  if(item === 'clear'){
    todoList.length = 0;
  } else {
    todoList.push(item);
  }
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

export function removeItemInList(index){
  todoList.splice(index, 1);
  localStorage.setItem('todoList', JSON.stringify(todoList));
}