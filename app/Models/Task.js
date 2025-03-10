import { generateId } from "../utils.js";

export default class Task {
    constructor({id = generateId(), listId, name }){
        this.id = id;
        this.name = name;
        this.listId = listId;
    }

    get Template1() {
        return /*html*/ `
        <dt>${this.name}
        <button class="btn btn-danger" onclick="app.listController.deleteTask('${this.listId}','${this.id}')">X</button></dt>
        `;
    }
}