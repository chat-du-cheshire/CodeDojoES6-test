function log(some) {
    console.log(some);
}

function grStart(str){
    console.group(str);
}

function grEnd(){
    console.groupEnd();
}

grStart("Пример генератора");

// Генераторы объявляются при помощи символа * между function и именем функции
// function * name(){}
// function* name(){}
// function *name(){}

function* generator() {
    log("Start");
    yield 1;
    yield 2;
    yield 3;
    log("Finish");
    return 4;
}

log(typeof generator); // function
log(generator()); // Объект соответствующий интерфейсу итератора (имеющий метод .next() в прототипе)
let iterator = generator();
// Start
log(iterator.next()); // {value: 1, done: false}
log(iterator.next()); // {value: 2, done: false}
log(iterator.next()); // {value: 3, done: false}
// Finish
log(iterator.next()); // {value: 4, done: true}

grEnd();

grStart("Пример генератора чисел");

// Генераторы объявляются при помощи символа * между function и именем функции
// function * name(){}
// function* name(){}
// function *name(){}

function* range(start, end) {
    let current = start;

    while(current <= end) {
        yield current++;
    }
}

for (let num of range(1,10)) {
    log(num);
}

grEnd();

grStart("Пример генератора в объекте");

const obj = {
    *range(start, end) {
        let current = start;

        while(current <= end) {
            yield current++;
        }
    }    
}

for (let num of obj.range(1,10)) {
    log(num);
}

grEnd();

grStart("Пример генератора получающего значения");

function* gen(){
    let res = (yield);
    log(`Result: ${res}`);
}

let iter = gen();
log(iter.next()); // Вызов запускает генератор
log(iter.next(1)); // Передает значение в генератор, после чего с ним можно проводить манипуляции

grEnd();

grStart();

function* gen3(){
    yield* [5,6];
}

function* gen2(){
    yield 1;
    yield* [2,3]; // Делегирование генератора
    yield 4;
    yield* gen3();
}

let iter2 = gen2();

log(iter2.next()); // {value: 1, done: false}
log(iter2.next()); // {value: 2, done: false}
log(iter2.next()); // {value: 3, done: false}
log(iter2.next()); // {value: 4, done: false}
log(iter2.next()); // {value: 5, done: false}
log(iter2.next()); // {value: 6, done: false}
log(iter2.next()); // {value: undefined, done: true}

grEnd();

grStart("Остановка генератора");

function* gen4(){
    yield 1;
    yield 2;
    yield 3;
}

let iter3 = gen4();

log(iter3.next()); // {value: 1, done: false}
// Остановка итератора
log(iter3.return()); // {value: undefined, done: true}
log(iter3.next()); // {value: undefined, done: true}

grEnd();

grStart("Прерывание генератора с ошибкой");

function* gen5(){
    try{
        yield 1;
        yield 2;
        yield 3;    
    } catch(e) {
        log(e);
    }
}

let iter4 = gen5();

log(iter4.next()); // {value: 1, done: false}
// Error: Error
//     at generators.js:152
log(iter4.throw(new Error("Error"))); // {value: undefined, done: true}
log(iter4.next()); // {value: undefined, done: true}

grEnd();