function callEditTask(){
  
  let editItem = document.getElementsByClassName('editButton')
  
  for(let i = 0; i<editItem.length; i++){
    editItem[i].addEventListener('click', editTask)
  }

}
function editTask(element){
  let input = element.composedPath()[2].children[1]
  if(input.disabled){
    input.style.border = "3px dashed red" 
    input.style.borderRadius = "10px"
    input.disabled = false
  }else{
    input.disabled = true
    input.style.border = "none" 

  }
}