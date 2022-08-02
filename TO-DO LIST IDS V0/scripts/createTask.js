const sendTask = document.querySelector('#sendTask')

sendTask.addEventListener('click', sendingTask)

function sendingTask(){
  const task = document.querySelector('#inputTask')
  const list = document.querySelector('.listTasks > ul')
  

  const item = document.createElement('li')
  const contentItem = document.createElement('p')
  contentItem.setAttribute('class', 'task')
  
  contentItem.innerText = task.value

  item.appendChild(contentItem)

  list.appendChild(item)

  task.value = ""
  task.focus()
}