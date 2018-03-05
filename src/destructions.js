const [a,b,c] = ["a", "b", "c"];
// f = 5 - значение по умолчанию
const [d,,e,f = "f"] = ["d", "123", "e"];
const [g, [h, i]] = ["g", ["h", "i"]];
const [j, ...arr] = ["j", "k", "l", "m"];

console.log(a,b,c,d,e,f,g,h,i,j,arr);

const {firstname, lastname, age = 28} = {firstname: "Max", lastname: "Ivanov"};
console.log(firstname, lastname, age);

const {firstname: first, lastname: last, socials: {instagram: insta}} = {
    firstname: "Max", 
    lastname: "Ivanov",
    socials: {
        '500px': 'chatducheshire',
        instagram: 'max_du_cheshire'
    }
};
console.log(first, last, insta);