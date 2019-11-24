import { generateId } from "../utils.js";
import Task from "../Models/Task.js"

export default class List {
  constructor({ id = generateId(), name, tasks }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = id;
    this.name = name;
    this.tasks = tasks.map(t => new Task(t))
  }
  get Template() {
    return /*html*/ 
    `
      <div class="col-5 mt-3 p-3 border rounded bg-info">
      <button type="button" class="btn btn-danger btn-block" onclick="app.listController.deleteList('${this.Id}')">Remove</button>
        <h3 class="text-center border-bottom">${this.name}</h3>
        <ul class="ml-5">${this.drawTasks()}</ul>  
          <form class="form-inline" onsubmit="app.listController.addTask(event, '${this.id}')">
            <div class="form-group mb-2">
              <input 
              type="text" 
              class="form-control d-inline-block" 
              name="name"
              id="name" 
              placeholder="Enter Task Name...">
              </div>
              <button type="submit" class="btn btn-primary btn-block">Add</button>
          </form>
         
      </div>
    `
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  
drawTasks() {
  let template = "";
  this.tasks.forEach(task => (template += task.template));
  return template;
}
}