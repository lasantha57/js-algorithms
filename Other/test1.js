


// calculateSum(5)(4)(3)();

const calculateSum = function (value1) {
    return function (value2) {
        if (value2) {
            return calculateSum(value1 + value2);
        } else {
            return value1;
        }
    }
}

const sum = a => b => b ? sum(a + b) : a;


//console.log(calculateSum(5)(4)());

// console.log(null == undefined)

var b = []; b.v = 10; b.push(11);

//console.log(b.length)

const person = {
    name: 'lasantha',
    walk() {
        setTimeout(() => {
            console.log(this);
        }, 1000)
    }
}

person.walk();
const walk = person.walk.bind(person);
walk();