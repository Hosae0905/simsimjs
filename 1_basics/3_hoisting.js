/**
 * 호이스팅
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상이다.
 */

console.log('Hello')
console.log('World')

// 이렇게 코드를 작성하면 1번 코드에서 undefined가 출력된다.
// console.log(name)   // 1
// var name = 'test'
// console.log(name)   // 2

// 위의 코드를 풀어서 보면 아래와 같이 동작하게 된다.
// var name
// console.log(name)
// name = 'test'
// console.log(name)

// let으로 선언하면 호이스팅이 되지만 에러를 통해서 방지를 해준다.(var가 아닌 let, const를 사용하는 이유) ReferenceError: Cannot access 'name' before initialization
// console.log(name)
// let name = 'test'
// console.log(name)

