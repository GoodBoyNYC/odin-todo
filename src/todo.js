/*
Todo Class
-all belong to a project whether specified or not.
-each item can have a due date
-todos should be checked off

*/
export class Todo {
    constructor(description, dueDate, priority, isComplete=false) {
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.isComplete= isComplete;
    }

    get description(){
        return this.description;
    }

    set description(newDesc){
        this.description=newDesc;
    }

    get dueDate(){
        return this.dueDate;
    }

    set dueDate(newDate){
        this.dueDate=newDate;
    }

    get priority(){
        return this.priority;
    }

    set priority(newPriority){
        this.priority=newPriority;
    }

    get isComplete(){
        return this.isComplete;
    }

    set isComplete(newStatus){
        this.isComplete=newStatus;
    }
}

export function todoConsole(){
    console.log("todo.js");
}