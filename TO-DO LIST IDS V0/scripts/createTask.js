const sendTask = document.querySelector('#sendTask')

sendTask.addEventListener('click', sendingTask)

function sendingTask(){
  const task = document.querySelector('#inputTask')
  const list = document.querySelector('.listTasks > ul')
  
  const item = document.createElement('li')
  const removeButton = document.createElement('button')
  const contentItem = document.createElement('p')
  const div = document.createElement('div')
  const editButton = document.createElement('button')
  const checkButton = document.createElement('button')

  item.setAttribute('class', 'taskContainer')
  contentItem.setAttribute('class', 'taskValue')
  removeButton.setAttribute('class', 'removeButton')
  editButton.setAttribute('class', 'editButton')
  checkButton.setAttribute('class', 'checkButton')

  contentItem.innerText = task.value

  div.append(editButton, checkButton)
  item.append(removeButton, contentItem, div)

  list.appendChild(item)

  task.value = ""
  task.focus()
}