const sym = Symbol();
console.log(sym); // Symbol()
console.log(typeof sym); // symbol

const sym1 = Symbol();

console.log(sym1 === sym); // false

/**
    Метод for создает символ в глобалном реестре символов
    При повторном запросе извлекает его из него
 */
const symFor = Symbol.for('name');
const symFor1 = Symbol.for('name');
console.log(symFor1 === symFor); // true

const name = Symbol.keyFor(symFor);
console.log(name); // name

const some = Symbol.for('some');
const obj = {
    prop: 'prop',
    [Symbol('other')]: 'other',
    [some]: 'some'
}

console.log(obj.other); // undefined
console.log(obj); // {prop: "prop", Symbol(other): "123"}
console.log(Object.keys(obj)); // ["prop"]
console.log(Object.getOwnPropertyNames(obj)); // ["prop"]
console.log(obj[Symbol.for('other')]); // undefined
console.log(obj[Symbol.for('some')]); // some
console.log(obj[some]); // some
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(other), Symbol(some)]