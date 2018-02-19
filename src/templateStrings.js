// Обычная шаблонная строка
let str = "Some string";

console.log(`This is my '${str}'`);

// Мультистрочная
function testMultiline(line1, line2, line3, line4){
    console.log(`
        Line 1: ${line1}
        Line 2: ${line2}
        Line 3: ${line3}
        Line 4: ${line4}
    `);
}

testMultiline("First line", "Second line", "Third line", "Fourth line");

// Строки вычисляющие выражения
console.log(`${2} + ${5} = ${2 + 5}`);

// Строки с обрабатываемыми параметрами
str = "Some string";

console.log(parser`This is my '${str}'`);

function parser(literals, value){
    return `${literals[0]}${value.toString().toUpperCase()}${literals[literals.length-1]}`;
}