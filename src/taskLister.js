let taskListerId = 0;
class TaskLister {
  // your solution here
  constructor(){
    this.id = ++taskListerId
    this.parentNode = document.querySelector("#app-content")
    this.node = document.createElement("form")
    this.node.id = `taskLister-${this.id}`
    this.node.classList = "taskLister"
    this.parentNode.insertBefore(this.node,this.parentNode.firstElementChild)
    this.node.innerHTML = `<label for="parent-list">Select List:</label>
                            <select id="parent-list"></select>
                            <label for="new-task-description">Task description:</label>
                            <input required type="text" id="new-task-description" placeholder="description">
                            <label for="new-task-priority">Priority level:</label>
                            <input type="text" id="new-task-priority" placeholder="priority">
                            <input type="submit" value="Create New Task">
                          `
    store.taskListers.push(this)
  }

  addList(list){
    let selectNode = document.querySelector("#parent-list")
    let optionNode = document.createElement("option")
    optionNode.value = list.name
    optionNode.innerText= list.name
    optionNode.id = `select-option-${list.id}`
    selectNode.append(optionNode)
    list.taskListerId = this.id
  }



  removeList(listId){
    let selectNode = document.querySelector("#parent-list")
    let optionNode = document.querySelector(`#select-option-${listId}`)
    selectNode.removeChild(optionNode)

  }

}
