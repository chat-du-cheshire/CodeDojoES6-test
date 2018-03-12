// Итератор - паттерн проектирования, согласно которому источник элементов прячется от клиента.
// Клиенту предоставляется специальный объект, при помощи которого он может получить элементы по одному.
// Таким образом клиенту не нужно беспокоиться о том как итерировать объект.
// Внутри объекта автор может использовать любую структуру для хранения и обработки объекта, не беспокоясь о том, что клиент может изменить ее каким либо образом.
console.group("Перебор итератора вручную");

const arr = ["1", "2", "3"];
// Symbol.iterator - спец. символ ES6 позволяющий итерировать массивы
// arr[Symbol.iterator] - возвращает функцию, которая при вызове вернет итерируемый объект
const iterator = arr[Symbol.iterator]()

// iterator.next() - вернеть следующее значение итератора (Объект: {value: any, done: boolean})
// iterator - не знает сколько значений в итерируемом объекте
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.groupEnd();

console.group("Перебор итератора в цикле");
let a = iterator.next(), b = iterator.next();
console.log(a == b, a === b); // false false

const arr2 = ["2.1", "2.2", "2.3"];
const iterator2 = arr2[Symbol.iterator]();

let next = iterator2.next();
while (!next.done){
    console.log(next.value);
    next = iterator.next();
}
console.groupEnd();

console.group("Пример генератора на основе итератора");
const generator = {
    [Symbol.iterator]() {
        let count = 0;

        return {
            next() {
                count++;
                const value = Math.ceil(Math.random() * 100);
                const done = count > 10;
                return {value, done}
            }
        }
    }
}

for(let rand of generator) {
    console.log(rand);
}

console.groupEnd();

console.group("Пример DRY принципа с использованием итератора");

class ListIterator {
    constructor(list) {
        this.list = list;
        this.count = 0;
    }

    next() {
        let result = {value: undefined, done: true};
        if(this.count < this.list.length) {
            result.value = this.list[this.count];
            result.done = false;
        }
        this.count++;
        return result;
    }
}

class List {
    constructor(){
        this.items = [];
    }

    addItems(...items){
        this.items = [...this.items, ...items];
    }

    [Symbol.iterator]() {
        return new ListIterator(this.items);
    }
}

const list = new List();
list.addItems(1,2,3,4);

for(let item of list) {
    console.log(item);
}


console.groupEnd();