import store from "../store.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  addList(listData) {
    let newList = new List(listData);
    store.State.lists.push(newList)
    store.saveState();
  }
  addTask(newTask) {
    let freshTask = new Task(newTask);
    let foundList = store.State.lists.find(list => list.Id == freshTask.listId);
    foundList.tasks.push(freshTask);
    store.saveState();
  }
  deleteTask(listId, taskId) {
    let foundList = _store.State.lists.find(
      list => list.id == listId
      );
      foundList.tasks = foundList.tasks.filter(
        task => task.id != taskId
        );
        _store.saveState();
      }
  deleteList(listId) {
    let foundList = _store.State.lists.findIndex(list => list.id == listId)
     foundList.tasks = foundList.tasks.filter(task => task.id != taskId);
     store.saveState();
  }
}
const LISTSERVICE = new ListService();
export default LISTSERVICE;
