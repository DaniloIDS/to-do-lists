function callCheckTask(){
  let checkBtn = document.getElementsByClassName('checkButton')

  for(let i = 0; i<checkBtn.length; i++){
    checkBtn[i].addEventListener('click', checkTask)
  }
}

function checkTask(element){
  let task = element.composedPath()[2]
  task.children[2].children[0].removeEventListener('click', editTask)
  task.children[1].style.textDecoration = "line-through"
  task.style.backgroundColor = "lightgreen"
  task.children[1].style.backgroundColor = "lightgreen"
  
}