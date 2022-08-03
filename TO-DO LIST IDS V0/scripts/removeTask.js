function callRemoveTasks(){
  
  let removeItem = document.getElementsByClassName('removeButton')
  
  for(let i = 0; i<removeItem.length; i++){
    removeItem[i].addEventListener('click', removeTask)
  }

}

function removeTask(element){
  element.composedPath()[1].remove()
}