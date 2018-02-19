const A = ['a', 'b', 'c'], B = ['d', 'e', 'f'];

const all = [...A, ...B, 'g', 'h'];

console.log(all);

function func(a,b,c){
    console.log(a,b,c);
};

func(...A);
