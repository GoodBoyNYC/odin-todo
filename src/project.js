/*
should only contain 
Project
-can have multiple projects. 
-can have a project of projects.
-all records in project is a todo
-projects have own due date
-Project completion can override if todos are not individually finished or not.
*/
export class Project {
    constructor(title, description, dueDate, priority) {
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.arrTodo = [];
    }

    addTodoList(obj){
        this.arrTodo.push(obj);
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getTodos() {
        return this.arrTodo;
    }
}

export function projectConsole(){
    console.log("project.js");
}