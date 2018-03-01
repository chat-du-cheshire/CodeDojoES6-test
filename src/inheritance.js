class Task {
    constructor(title = '', done = false){
        this.title = title;
        this.done = done;
        this.log();
    }

    log(message = "Creating task"){
        console.log(message);
    }

    complete(){
        this.done = true;
    }
}

/**
    Конструктор у наследуемого класса должен быть обязательно.
    В противном случае ошибка
  */
class SubTask extends Task {
    constructor(title = '', done = false, parent = null) {
        super(title, done);
        this.parent = parent;
    }

    log(message = "Creating subtask"){
        console.log(message);
    }
}

const task = new Task("Task"),
      subTask = new SubTask("Subtask", undefined, task);


console.log(task);
console.log(subTask);

console.log(subTask instanceof Task); // true
console.log(subTask instanceof SubTask); // true