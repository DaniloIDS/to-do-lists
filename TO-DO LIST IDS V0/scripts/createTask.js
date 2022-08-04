const sendTask = document.querySelector('#sendTask')

sendTask.addEventListener('click', sendingTask)

function sendingTask(){
  const task = document.querySelector('#inputTask')
  const list = document.querySelector('.listTasks > ul')
  
  const item = document.createElement('li')
  const removeButton = document.createElement('button')
  const contentItem = document.createElement('input')
  const div = document.createElement('div')
  const editButton = document.createElement('button')
  const checkButton = document.createElement('button')

  contentItem.type = 'text';

  item.setAttribute('class', 'taskContainer')
  contentItem.setAttribute('class', 'taskValue')
  removeButton.setAttribute('class', 'removeButton')
  editButton.setAttribute('class', 'editButton')
  checkButton.setAttribute('class', 'checkButton')

  contentItem.value = task.value
  contentItem.disabled = true

  div.append(editButton, checkButton)
  item.append(removeButton, contentItem, div)

  list.appendChild(item)

  callRemoveTasks()
  callEditTask()
  callCheckTask()

  task.value = ""
  task.focus()
}