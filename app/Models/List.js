import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name;
  }
  get template() {
    return /*html*/ `
    <div class="col-4 border-solid">
    <h3>${this.name}</h3>
    <form class="mx-auto" onsubmit="app.listController.addTask(event, '${this.id}')">
    <div class="form-group row">
        <label for="name" class="col-form-label"></label>
        <div class="col-sm-1-12">
            <input type="text" class="form-control" name="task"
            id="task" placeholder="Enter Task...">
            <button type="submit">Add</button>
        </div>
    </div>
    </form>
    </div>
    `
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
