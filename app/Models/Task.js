import { generateId } from "../Utils.js";

export default class Task {
    constructor({id = generateId(), listId, name }){
        this.id = id;
        this.name = name;
        this.listId = listId;
    }

    get Template() {
        return `
        <li>${this.name}</li><button class="btn btn-danger" onclick="app.listController.deleteTask('${this.listId}','${this.Id}')">Remove</button>
        `;
    }
}