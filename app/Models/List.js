import { generateId } from "../utils.js";
import Task from "../Models/Task.js"

export default class List {
  constructor({ id = generateId(), name, tasks = [] }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id;
    this.name = name;
    this.tasks = tasks.map(t => new Task(t))
  }
  get template() {
    /*html*/
    return `
      <div class="col-sm-6 col-md-4 m-3 p-3 border rounded d-inline-block">
        <h3 class="text-center border-bottom">${this.name}</h3>
        <p class="ml-5">${this.drawTasks()}</p>  
        <form class="form-inline" onsubmit="app.listController.addTask(event, '${this.id}')">
          <div class="form-inline mb-2">
            <input 
            type="text" 
            class="form-control d-inline-block" 
            name="name"
            id="taskSpace" 
            placeholder="Enter Task Name...">
            <button type="submit" class="btn btn-primary btn-block">Add Task</button>
            <button type="button" class="btn btn-danger btn-block" onclick="app.listController.deleteList('${
            this.id
            }')">Delete List</button>
          </div>
        </form>
         
      </div>`;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  
drawTasks() {
  let template = "";
  this.tasks.forEach(task => (template += task.Template1));
  return template;
}
}