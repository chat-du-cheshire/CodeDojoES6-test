const a = "a", b = "b", c = "c";

// Свойства совпадающие с именем переменной
console.log({a,b,c})

const prop = "prop";

// Динамические свойства
console.log({[prop] : prop});


// Методы объекта
const o = {
    a, b,
    print() {
        return `${this.a} ${this.b}`;
    }
}

console.log(o.print());

// Класс
class A {
    constructor(){
        this.a = a;
        this.b = b;
    }

    // Свойство сеттер
    set full(val) {
        this.a = val.split(' ')[0];
        this.b = val.split(' ')[1];
    }

    // Свойство геттер
    get full(){
        return `${this.a} ${this.b}`;
    }
}


const na = new A();

console.log(na.full, na.a, na.b);
na.full = "aa bb";
console.log(na.full, na.a, na.b);