const a = 2;
let b = 3;
var c = 3 // don't ever do this
b = b + 2;
// const a = 4;

const add = (a, b) => {
    
    const sum = a + b;
    return sum;
}

const call2 = () => {
    const b = 5;
    const c = 2
    const sum = 5 + 2
}

const total = add(1, 2)
const total2 = add(5, 2)
console.log(total)
console.log(total2)

const add2 = function() {} // also don't do this
function add3() {} // this is the way to go