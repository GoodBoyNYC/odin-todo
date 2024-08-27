/*
Todo Class
-all belong to a project whether specified or not.
-each item can have a due date
-todos should be checked off

*/
class Todo {
    constructor(title, description, dueDate, priority, isComplete=false) {
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority; //1-3 scale
        this.isComplete= isComplete;
    }
    get title() {
        return this.title;
    }

    set title(newTitle){
        this.title=this.title;   
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