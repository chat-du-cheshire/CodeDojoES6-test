class Task {
    /**
        Конструктор может быть только один (если несколько, то ошибка)
        Если не указывать, js создаст пустой конструктор.
    */
    constructor(title = Task.getDefaultTitle(), done = false) {
        // Свойтва класса указываются в конструкторе
        this.title = title;
        this.done = done;
        this.count++;
    }

    complete() {
        this.done = true;
        this.count--;
        console.log(`Task ${this.title} done! Current task count ${Task.count}`);
    }

    get count() {
        return Task.count;
    }

    set count(value) {
        if (value >= 0) {
            Task.count = value;
        } else {
            Task.count = 0;
        }
        
    }

    // Статический метод класса. При попытке вызвать у экземпляра класса - ошибка (Uncaught TypeError: <varName>.getDefaultTitle is not a function)
    static getDefaultTitle() {
        return "Default task";
    }
}

// Статическое свойство создается в функции создающей класс.
// Внутри класса доступно через прмяое обращение к нему как A.staticProp.
Task.count = 0;

// Классы это функции, которые создают объекты
console.log(typeof Task); // function

const a = new Task("My task");
const b = new Task("My other task");
const c = new Task();

// Экземпляр класса - это объект
console.log(typeof a); // object
console.log(a instanceof Task); // true

a.complete();
console.log(a);
console.log(c);
a.getDefaultTitle(); // Uncaught TypeError: a.getDefaultTitle is not a function
