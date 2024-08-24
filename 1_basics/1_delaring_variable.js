/**
 * 변수 선언하기.
 * 1) var
 * 2) let
 * 3) const
 *
 * - var과 let으로 선언하면 값을 추후에 변경할 수 있다.
 * - const는 상수를 의미하며 값을 변경할 수 없다.
 */

var name = 'test'   // 문자
console.log(name)

var age = 12      // 숫자
console.log(age)

let name2 = 'abc'
console.log(name2)

const name3 = 'AAA'
console.log(name3)

/*
const로 선언한 변수를 변경하면 "TypeError: Assignment to constant variable." 이러한 에러가 발생한다.
name3 = 'BBB'
console.log(name3)
*/

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것: var name
 * 2) 값을 할당하는 것: var name = 'test'
 *
 * - var와 let으로 선언한 변수에 값을 할당하지 않고 출력하면 undefined가 초기값으로 할당된다.
 * - const로 선언하면 무조건 값을 할당해야 한다. 'const' variable without initializer is not allowed
 */

let undefinedTest
console.log(undefinedTest)

// const constTest

