//Loop iterate through 0-10
//Check if even (num % 2 === 0)
//If even, send to array
//Add together all elements in array
//Log final product

/*let sum = 0;

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        sum += i
    }
}*/


//5 - let/const/var variableName = value
//5 - variableName = newValue (only if not using const)
//5 - let/const/var newVariableName = variableName

/*let firstVariable = 'Hello World';
firstVariable = 17;
let secondVariable = firstVariable;
secondVariable = 'string';
//17*/

/*const myName = 'Draylen';
console.log(`Hello, my name is ${myName}`);*/

/*const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';

console.log(a < b);
console.log(c < d);
console.log('Peanut' === 'Peanut');
console.log(a < b > c);
console.log(a !== a < d);
console.log(e === 'Jelly Bean');
console.log(48 !== '48')
console.log('e' !== 'Eh');*/

/*let animal1 = 'cow';
if (animal1 = 'cow') {
    console.log('mooooo');
} else {
    console.log('Hey! You\'re not a cow.');
}

let age = 15;
if (age >= 16) {
    console.log('Here are the keys');
} else {
    console.log('Sorry, you\'re too young.');
}

for (let i = 0; i < 11; i++) {
    console.log(i);
}
for (let j = 500; j > 49; j--) {
    console.log(j);
    
}*/

/*for (let k = 1; k < 101; k++) {
    if (k % 2 !== 0) {
        console.log(`${k} is an odd number`);
    }
    
}*/

/*for (let l = 0; l < 101; l++) {
    if (l % 5 === 0) {
        console.log(`I found a ${l}. High five!`);
    } else if (l % 3 === 0) {
        console.log(`I found a ${l}. Three is a crowd`);
    }
    
}*/

/*let bank_account = 0;
for (let m = 1; m < 11; m++) {
    bank_account = bank_account + m;
    
}
console.log(bank_account);
for (let m = 1; m < 101; m++) {
    bank_account = bank_account + (m * 2);
    
}
console.log(bank_account);*/

let var1 = 0;
let sum = 1;
let temp = 0;
console.log(var1);
console.log(sum);
for (let n = 2; n < 10; n++) {
    temp = sum;
    sum += var1;
    var1 = temp;
    console.log(sum);
    
}