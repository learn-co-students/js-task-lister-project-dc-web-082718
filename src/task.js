let taskId = 0
class Task {
  // your code here
  constructor(listName, priority, description){
    let list = store.lists.find(x => x.name ==listName)
    this.listId = list.id
    this.priority = priority
    this.description = description
    this.id = ++taskId
    store.tasks.push(this)
    this.postTask()

  }

  postTask(){
    let parentNode = document.querySelector(`#list-${this.listId} ul`)
    this.node = document.createElement("li")
    this.node.id = `task-${this.id}`
    parentNode.appendChild(this.node)
    this.node.innerHTML =`<li>
        Task: ${this.description}
        <button id="delete-task-${this.id}" data-task-id="${this.id}" class="delete-task">
          X
        </button>
        <br>
        Priority: ${this.priority}
      </li>`

    document.querySelector(`#delete-task-${this.id}`).addEventListener("click",function(event){
      this.deleteTask()
    }.bind(this))

  }

  deleteTask(){
    document.querySelector(`#task-${this.id}`).remove()
  }
}
