/**
 * if 조건문
 *
 */

let num = 5;

if (num % 2 === 0) {
    console.log('짝수')
} else {
    console.log('홀수')
}

if (num % 2 === 0) {
    console.log('2의 배수')
} else if (num % 3 === 0) {
    console.log('3의 배수')
} else if (num % 4 === 0) {
    console.log('4의 배수')
} else if (num % 5 === 0) {
    console.log('5의 배수')
} else {
    console.log('없음')
}

/**
 * switch
 */

const day = 'mon'
let switchDay

switch (day) {
    case "mon": switchDay = '월요일'; break;
    case "tue": switchDay = '화요일'; break;
    case 'wen': switchDay = '수요일'; break;
    default: switchDay = '없음'; break;
}

console.log(switchDay)

