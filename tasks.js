const tasks = []


function createList(listTitle){
  event.preventDefault()
    let obj = {}
    obj["title"] = listTitle.value
    obj["id"] = tasks.length + 1
    tasks.push(obj)
}

function displayLists() {
  const allLists = document.querySelector("#allLists")
  let newEl = document.createElement('div')
  newEl.id = tasks[tasks.length - 1].title
  newEl.innerHTML = tasks[tasks.length - 1].title
    // let listDiv = `<div class="listDiv"> <h2> ${tasks[i].title} </h2> </div>`
  var btn = document.createElement("BUTTON")
  btn.className = "delete"
    var t = document.createTextNode("X")
    btn.appendChild(t)
    newEl.appendChild(btn)
    allLists.appendChild(newEl)
    btn.id = `${tasks[tasks.length - 1].title}`
}

function render() {
  const sidebar = document.querySelector("#sidebar")

 let first = `<form id="add_task" action="#" method="post">
    <label for="select_list">Select List:</label>
    <select id="select_list"  name="select_list">`
  let last = `</select>
    <label for="task_description">Task description:</label>
    <input type="text" id="task_description" name="task_description" placeholder="description">
    <label for="task_priority">Priority level:</label>
    <input type="text" id="task_priority" name="task_priority" placeholder="priority">
    <input id="newTask" type="submit" value="(+) add">
    </form>`
  let middle = ''

 for (let i in tasks){
   middle += `<option value="${tasks[i].id}">${tasks[i].title}</option>`
  }

 let text = first + middle + last
  sidebar.innerHTML = text
}


function deleteItem(id) {
let el = document.getElementById(id)
el.remove()
for (var i = 0; i < tasks.length; i++) {
  if(tasks[i].title == id) {
    tasks.splice(i, 1)
    break
  }
  }
}

function addDescription(task, description, priority){
  tasks[task-1]["description"] = description
  tasks[task-1]["priority"] = priority
  var taskDiv = document.getElementById(`${tasks[task-1].title}`)

  taskDiv.innerHTML += `Description: ${tasks[task-1]["description"]}`
  taskDiv.innerHTML += `Priority: ${tasks[task-1]["priority"]}`
  debugger 
}
