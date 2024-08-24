/**
 * 자바스크립트 데이터 타입
 *
 * - 여섯개의 Primitive Type과 한 개의 Object 타입이 있다.
 *
 * - Primitive 타입
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (참-거짓)
 * 4) undefined (정의가 되지 않은 타입)
 * 5) null (정의가 되지 않은 타입 - undefined랑 약간 다름)
 * 6) Symbol
 *
 * - Object 타입
 * 1) Object (객체)
 */

/**
 * Number 타입
 */
const age = 10
const temp = -10
const pi = 3.14

console.log(typeof age)
console.log(typeof temp)
console.log(typeof pi)
console.log('=============================================')

const infinity = Infinity
const nInfinity = -Infinity

console.log(typeof infinity)
console.log(typeof nInfinity)
console.log('=============================================')

/**
 * String 타입
 */
const str = 'str'
console.log(typeof str)

const str2 = "'str1' str"   // 작은 따옴표를 문자열로 표현하고 싶은 경우
const str3 = '"str1" str'   // 큰 따옴표를 문자열로 표현하고 싶은 경우
console.log(str2)
console.log(str3)
console.log('=============================================')
/**
 * Escaping Character
 * 1) newline: \n
 * 2) tab: \t
 * 3) 백슬래시를 문자열로 표현하고 싶으면 두번 입렫하면된다.
 * 4) 작은 따옴표를 문자열 내에서 표현하고 싶으면 백슬래스를 추가해서 표현할 수 있다.
 */
const test = 'str1\nstr2'
const test1 = 'str1\tstr2'
const test2 = 'str1\\str2'
const test3 = 'str1\'str2'

console.log(test)
console.log(test1)
console.log(test2)
console.log(test3)
console.log('=============================================')
/**
 * Template Literal
 * Escaping 문자가 불편하여 사용하는 것이 Template Literal이다.
 * `` 안에 ${변수}를 넣어주면 쉽게 출력할 수 있다.
 */
const templateLiteral = `str1
str2`
console.log(templateLiteral)
console.log(typeof templateLiteral)
console.log(`${templateLiteral} test`)
console.log('=============================================')
/**
 * Boolean
 */

const isTrue = true
const isFalse = false

console.log(typeof isTrue)
console.log(typeof isFalse)
console.log('=============================================')

/**
 * undefined
 * 사용자가 직접 값을 초기화하지 않았을때 지정되는 값이다.
 * typeof를 사용하면 타입으로 undefined가 출력된다.
 */

let noInit
console.log(noInit)
console.log(typeof noInit)
console.log('=============================================')

/**
 * null 타입
 * 값이 없다는 뜻이지만 개발자가 명시적으로 없는 값으로 초기화할때 사용된다.
 * null 타입은 primitive 타입이지만 typeof를 출력하면 object로 출력된다. --> 실제로 버그임
 */
let init = null
console.log(init)
console.log(typeof init)
console.log('=============================================')
/**
 * Symbol
 *
 * 유일무이한 값을 생성할때 사용한다.
 * 다른 primitive 값과는 다르게 Symbol 함수를 호출해서 사용한다.
 */

const symbolTest = '1'
const symbolTest2 = '1'
console.log(symbolTest === symbolTest2)     // true

const symbol1 = Symbol('1')
const symbol2 = Symbol('1')
console.log(symbol1 === symbol2)            // false
console.log('=============================================')
/**
 * Object
 *
 * 키와 값의 쌍으로 이루어져있는 타입이다.
 * console.log(변수명[키])를 출력해보면 해당 키에 속하는 값이 출력된다.
 * typeof를 출력해보면 주어진 키에 해당하는 값에 대한 타입이기 때문에 object가 아닌 primitive 타입으로 출력된다.
 */

const dictionary = {
    name: 'test1',
    no: 1
}

console.log(dictionary)
console.log(dictionary['name'])
console.log(dictionary['no'])
console.log(typeof dictionary['name'])
console.log(typeof dictionary)
console.log('=============================================')
/**
 * Array 타입
 *
 * 값을 리스트로 나열 할 수 있는 타입
 * 인덱스가 주어져 이를 통해 값에 접근할 수 있다.
 */

const arr = [
    'test1',
    'test2',
    'test3'
]

console.log(arr)
console.log(arr[0])
arr[0] = 'AAA'
console.log(arr[0])
console.log(typeof arr)

console.log('=============================================')