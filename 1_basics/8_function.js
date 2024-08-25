/**
 * 함수
 *
 * 함수는 반복을 줄일 수 있다.
 */

function calculate() {      // 매개변수가 없는 함수
    console.log((2 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number) {    // 매개변수가 있는 함수
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에대한 정의를 parameter
 * 실제 입력하는 값을 argument
 */
calculate(3);
calculate(5);

function multi(x, y) {
    console.log(x * y);
}

multi(2, 4);

function multi(x, y = 10) {     // default 값을 정해줄 수 있다.
    console.log(x * y);
}

multi(2, 4);
multi(2);

/**
 * return
 */

function cal(x, y) {
    return x * y;
}

let result = cal(2, 4);
console.log(result);

/**
 * Arrow 함수
 */

const multiply = (x, y) => {
    return x * y;
}

console.log(multiply(3, 4));

// 함수 안에 실행 구문이 하나만 있으면 간략하게 사용할 수 있다.
const multiply2 = (x, y) => x * y;
console.log(multiply2(4, 5));

// 파라미터가 하나면 괄호도 지울 수 있다.
const multiply3 = x => x * 2;
console.log(multiply3(2));

const multiply4 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply4(2)(5)(3));

// 위의 Arrow 함수를 풀어서 쓰면 아래와 같이 작성할 수 있다.
function multiply5(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z: ${z}`;
        };
    };
}

console.log(multiply5(5)(6)(8));

const argumentsTest = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
};

console.log(argumentsTest(2, 3, 4));

const argumentTest2 = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(argumentTest2(2, 3, 4, 5, 6, 7));

// 즉시 실행함수로 정의를 하자마자 바로 실행된다.
(function (x, y) {
    console.log(x * y);
})(2, 4);

console.log(typeof multi);
console.log(multi instanceof Object);   // 함수는 Object이다.