/**
 * Array 함수
 */

let arr = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF'];

console.log(arr);

// push() --> 배열 맨 끝에 데이터를 추가할 수 있다. (배열을 직접적으로 변경함)
arr.push('ABC');
console.log(arr);
console.log(arr.push('ABCD'));      // 값을 추가한 다음에 길이를 출력해준다.

// pop() --> 배열 맨 끝의 데이터를 제거하고 출력해준다.
console.log(arr.pop());
console.log(arr);

// shift --> 배열의 첫 번째 데이터를 제거하고 출력해준다.
console.log(arr.shift());
console.log(arr);

// unshift() --> push()와 같이 데이터를 추가해주는데 배열의 맨 앞에 추가해준다.
console.log(arr.unshift('AAA'));
console.log(arr);

// splice() --> 시작 인덱스부터 카운트하여 해당하는 데이터를 삭제하고 해당 데이터를 배열로 만들어 반환해준다.
console.log(arr.splice(0, 2));  // 배열로 반환해준다.
console.log(arr);
console.log('=========================================');
let arr2 = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];

// concat() --> 기존의 배열에 데이터를 추가하고 새로운 배열을 만들어서 반환해준다.
console.log(arr2.concat('ABC'));
console.log(arr2);      // 변경이 없음

// slice() --> 시작 인덱스부터 종료 인덱스까지 해당하는 데이터를 삭제하고 해당 데이터를 배열로 만들어 반환해준다.
console.log(arr2.slice(0, 2));
console.log(arr2);      // 변경이 없음
console.log('=========================================');

// spread operator(...)
let arr3 = [...arr2];   // 기존의 배열에 담겨 있는 데이터를 넣어준다.
let arr4 = [arr2];       // 배열 자체를 넣는다.
console.log(arr3);
console.log(arr4);

// spread operator를 사용하면 완전히 새로운 배열이 탄생한다. --> 메모리 공간이 달라짐
let arr5 = arr2;
console.log(arr5);
console.log(arr5 === arr2);     // true
console.log([
    ...arr2
] === arr2);        // false
console.log('=========================================');

// join() --> 컴마를 기준으로 모든 값들을 합칠 수 있다.
console.log(arr2.join());
console.log(typeof arr2.join());
console.log(arr2.join('/'));        // 중간에 인자를 줘서 합칠 수 있다.
console.log(arr2.join(', '));

// sort() --> 오름차순으로 정렬(기존의 배열이 변경됨)
let test1 = ['CCC', 'PPP', 'TTT', 'AAA', 'BBB'];
test1.sort();
console.log(test1);
console.log(test1.reverse());       // 내림차순
console.log('=========================================');

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
})
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);
console.log('=========================================');

// map()
let test2 = ['CCC', 'PPP', 'TTT', 'AAA', 'BBB'];
console.log(test2.map((x) => x));
console.log(test2.map((x) => `str: ${x}`));

console.log(test2.map((x) => {
    if (x === 'AAA') {
        return `str: ${x}`;
    } else {
        return x;
    }
}));

console.log(test2);     // 기존의 배열은 변경되지 않는다.
console.log('=========================================');

// filter() --> true면 값을 넣어서 반환해주고 false면 값을 넣지 않는다.
numbers = [1, 8, 7, 5, 2];
console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));
console.log(numbers.filter((x) => x % 2 === 0));

// find() --> filter와 다르게 find는 순서대로 값을 보다가 해당되는 첫 번째 값만 반환해준다.
console.log(numbers.find((x) => x % 2 === 0));      // 8만 반환된다.

// findIndex() --> find랑 똑같은데 인덱스를 반환해준다.
console.log(numbers.findIndex((x) => x % 2 === 0));      // 인덱스를 반환해준다.

// reduce() --> next로 배열의 값이 하나씩 들어오고 반환되는 값이 prev로 들어간다. (아래에서 0은 초기값)
console.log(numbers.reduce((prev, next) => prev + next, 0));
