let listId = 0
class List {
  // your code here
  constructor(name){
    this.name = name
    this.id = ++listId
    this.html = `<h2>${this.name}<button data-title="${this.id}" id = "delete-${this.id}" class="delete-list">X</button></h2><ul></ul>`
    this.node = document.createElement("div")
    this.node.id = `list-${this.id}`
    this.node.classList = "list"
    List.postList(this)
    store.lists.push(this)
  }


  static postList(list){
    const listsNode = document.querySelector("#lists")
    listsNode.appendChild(list.node)
    list.node.innerHTML = list.html
  }

  static deleteList(listID){
    const listsNode = document.querySelector("#lists")
    let list = document.querySelector(`#list-${listID}`)
    listsNode.removeChild(list)
    }

}
