const [a,b,c] = ["a", "b", "c"];
// f = 5 - значение по умолчанию
const [d,,e,f = "f"] = ["d", "123", "e"];
const [g, [h, i]] = ["g", ["h", "i"]];
const [j, ...arr] = ["j", "k", "l", "m"];

console.log(a,b,c,d,e,f,g,h,i,j,arr);