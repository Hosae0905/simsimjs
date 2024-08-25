/**
 * 타임 변환
 * 
 * 1) 명시적 변환
 * 2) 암묵적 변환
 */

let age = 23;

// 명시적 변환 number --> string
let str = age.toString();
console.log(typeof str, str);

// 암묵적 변환 number --> string
let test = age + '';
console.log(typeof test, test);
console.log('98' + 2);
console.log('98' * 2);      // string에는 문자열을 합치는 것 외의 연산자가 number로 연산된다.
console.log('98' - 2);

/**
 * 명시적 변환
 */

// 문자열로 변환
console.log(typeof (99).toString())
console.log(typeof true.toString());
console.log(typeof Infinity.toString());

// 숫자타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

/**
 * Boolean 타입 변환
 * - 아무 글자도 없는 string은 false를 반환
 * - 값이 없는 경우 false를 반환
 * - 숫자 0일 때 false를 반환
 */

console.log(!!'x');
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!undefined);
console.log(!!null);
console.log(!!{});      // object는 값이 들어있든 없든 무조건 true다.