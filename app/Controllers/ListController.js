import ListService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = _store.Lists;
  lists.forEach(list => (template += list.template));
  document.querySelector("#listArea").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    console.log("made it to the draw")
    _drawLists();
  }
    addList(event) {
      console.log("hello from controller");
      event.preventDefault();
      let form = event.target;

    let listData = {
      id: "",
      name: form.name.value,
      tasks: []
    };

    ListService.addList(listData);
    form.reset();
    _drawLists();
  }
  addTask(event, listId) {
    event.preventDefault();
    let form = event.target;

    let newTask = {
     name: form.name.value,
     listId
    };

    ListService.addTask(newTask);
    form.reset();
    _drawLists();
  }
  deleteList(listId) {
   ListService.deleteList(listId);
    _drawLists()
  }
  deleteTask(listId, taskId) {
    ListService.deleteTask(listId, taskId);
    _drawLists();
  }
  
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
