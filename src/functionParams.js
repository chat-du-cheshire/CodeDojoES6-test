
// Параметры функции по умолчанию
function defaultParams(greet = "Hello", who = "world") {
    console.log(`${greet} ${who}!`);
}

defaultParams(); // Hello world!
defaultParams("Crazy"); // Crazy world!
defaultParams(undefined, "there"); // Hello there!
defaultParams("C'mon", "man"); // C'mon man!

// Функции с переменным числом аргументов
function differentArguments() {
    console.log(arguments instanceof Object, arguments); 
}

function differentArgs(...args) {
    console.log(args instanceof Array, args); 
}

differentArguments(1,2,3); // true, [1,2,3]
differentArgs(1,2,3); // true, [1,2,3]