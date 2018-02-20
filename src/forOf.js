const arr = ['a', 'b', 'c', 'd', 'e'];

// Обход массива по индексам
for (let index in arr) {
    console.log(index);
}

// Обход массива по элементам
for (let item of arr) {
    console.log(item);
}