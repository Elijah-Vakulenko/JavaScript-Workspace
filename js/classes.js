const fnA = function () {
    console.log('hello');
}

const fnB = fnA;
console.log('fnB === fnA:', fnB === fnA);