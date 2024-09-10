import { addSeconds } from "date-fns";

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
        console.log('1');
    }
}

export function projectConsole(){
    console.log("project.js");
}