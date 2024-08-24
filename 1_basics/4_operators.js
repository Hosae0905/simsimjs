/**
 * 연산자
 */

/**
 * null 연산자
 * ?? 연산자는 왼쪽 값이 null이거나 undefined인 경우 오른쪽 값을 반환해주는 연산자이다.
 */

let test
console.log(test)

test = test ?? 'AAA'
console.log(test)

test = test ?? 'BBB'
console.log(test)   // AAA가 출력된다. 왜냐하면 test는 AAA 값이 들어갔기 때문에 null이나 undefined이 아니다.
