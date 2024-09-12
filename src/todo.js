/*
Todo Class
-all belong to a project whether specified or not.
-each item can have a due date
-todos should be checked off

*/
export class Todo {
    constructor(description, dueDate, priority, isComplete=false) {
        this.__description=description;
        this._dueDate=dueDate;
        this._priority=priority;
        this._isComplete= isComplete;
    }

    get description(){
        return this._description;
    }

    set description(newDesc){
        this._description=newDesc;
    }

    get dueDate(){
        return this._dueDate;
    }

    set dueDate(newDate){
        this._dueDate=newDate;
    }

    get priority(){
        return this._priority;
    }

    set priority(newPriority){
        this._priority=newPriority;
    }

    get isComplete(){
        return this._isComplete;
    }

    set isComplete(newStatus){
        this._isComplete=newStatus;
    }
}

export function todoConsole(){
    console.log("todo.js");
}