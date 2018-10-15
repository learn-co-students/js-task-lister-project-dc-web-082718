document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  // const listDiv = document.getElementById("app-content");
  let taskLister;
  const createListForm = document.getElementById("create-list-form")

  createListForm.addEventListener('submit', createList)

  // const app = new TaskLister();
});


function createList(e){
  e.preventDefault()
  let userInput = e.target.querySelector("#new-list-title").value;
  if (document.querySelector(`#${userInput}`)){
    alert("Lists Must Have Unique Names")
  }
  else{
    if (!document.querySelector(`.taskLister`)){
      taskLister = new TaskLister
      document.querySelector(`#taskLister-${taskLister.id}`).addEventListener('submit', addListItem)
    }
    let list = new List(userInput)
    taskLister.addList(list)
    document.querySelector(`#delete-${list.id}`).addEventListener('click', deleteList)
    e.target.reset()
  }
}

function addListItem(e){
  e.preventDefault()
  let list = document.querySelector("#parent-list").value
  let description = document.querySelector("#new-task-description").value
  let priority = document.querySelector("#new-task-priority").value
  let task = new Task(list, description, priority)

}


function deleteList(e){
  let listId = e.currentTarget.id.replace("delete-", "");
  List.deleteList(listId)
  taskLister.removeList(listId)
  if (!document.querySelector(".list")){
  }

}
