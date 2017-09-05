document.addEventListener("DOMContentLoaded", ()=> {
  const addToList = document.querySelector("#add_list")
  const listTitle = document.getElementById("list_title")
  const allLists = document.getElementById("allLists")
  const sidebar = document.getElementById("sidebar")
  const button = document.querySelectorAll("button.delete")




 addToList.addEventListener("submit", ()=> {
    createList(listTitle);
    displayLists();
    render()
    })

   allLists.addEventListener("click", (event) => {
      if (event.target.className === "delete") {
        deleteItem(event.target.id)
      }
    })

   sidebar.addEventListener("submit", ()=> {
     const select_tag = document.getElementById("select_list")
     const task = select_tag.options[select_tag.selectedIndex].value
     const description = document.getElementById('task_description').value
     const priority = document.getElementById('task_priority').value
     addDescription(task, description, priority)
     render()
    })



})
