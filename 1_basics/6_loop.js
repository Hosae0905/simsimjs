/**
 * Loop
 *
 * 1) for
 * 2) while
 */

for (let i = 0; i < 5; i++) {
    console.log(i)
}

let str = '';

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
       str += '*';
    }
    str += '\n';
}

console.log(str)
console.log('===================================')
/**
 * for...in
 * 인덱스를 가져올 수 있다.
 */
const obj = {
    name: 'test',
    age: 20
}

for (const objKey in obj) {
    console.log(objKey)
}

const arr = ['AAA', 'BBB', 'CCC'];

for (const arrKey in arr) {
    console.log(arrKey)     // 인덱스 값을 받을 수 있다.
    console.log(`${arrKey}: ${arr[arrKey]}`)
}

/**
 * for...of
 * 값을 가져올 수 있다.
 */

for (const value of arr) {
    console.log(value)
}

/**
 * while
 */

let num = 0;
while (num < 5) {
    console.log(num);
    num++;
}
