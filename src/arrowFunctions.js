let sqr = (x) => x*x;

// Если в теле функции несколько строк, его надо оборачивать в { ... } и для возврата значения использовать return
let multiply = (x,y) => {
    let res = x*y;
    return res;
}

// Если функция возвращает объект при этом не имея тела функции, то возвращаемый объект надо обернуть в круглые скобки
let returnObject = (prop) => ({ prop });

// IEFE
(() => console.log("IEFE!"))()

console.log(typeof sqr); // function
console.log(sqr(2)); // 4
console.log(multiply(2,3)); // 6
console.log(returnObject("hello!")); // { prop: "hello!" }

const arr = [1,2,3,4];

console.log(arr.reduce((r, x) => r+x)); // 10
console.log(arr.map(sqr)); // [1,4,9,16]

const obj = {
    name : "Max",
    // Контекст стрелочной функции -- область инициализации obj
    greetBad: () => console.log(`Hello, ${this.name}!`),
    greet : function(){
        // Контекст стрелочной функции -- объект obj
        (() => console.log(`Hello, ${this.name}!`))();
    },
    greetTimeoutBad : function() {
        setTimeout(function() { 
             // setTimeout === window.setTimeout => this === window
            console.log(`Hello, ${this.name}! I'm busy!`) 
        }, 1000);
    },
    greetTimeout : function() {
        setTimeout(() => {
            // this === obj
            console.log(`Hello, ${this.name}! I'm busy!`)
        }, 1000);
    }
}
obj.greetBad(); // "Hello, !"
obj.greet(); // "Hello, Max!"
obj.greetTimeoutBad(); // "Hello, ! I'm busy!"
obj.greetTimeout(); // "Hello, Max! I'm busy!"

// Стрелочные функции нельзя использовать как конструкторы объектов
const Task = () => { console.log("Create!") };

const task = new Task(); // TypeError: Task is not a constructor