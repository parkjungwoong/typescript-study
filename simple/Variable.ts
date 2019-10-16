function f() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;

    function g() {
        return a;
    }
}

f(); // '2' 반환

for(var i=0; i<10; i++) {
    console.log(i);
}

i = 1;//var는 가능

for(let j=0; j<10; j++) {

}

//j=1; 접근 불가

/**
 * 비구조화
 */
let input = [1,2];
let [first, second] = input;
// let first = input[0]; let second = input[1]; 와 동일함
[first, second] = [second, first]; //변수 교환도 가능함

let [firstN, ...rest] = [1,2,3,4,5];
console.log(firstN); //1
console.log(rest); //2,3,4,5

let [,,,four,, ...rest2] = [1,2,3,4,5,6,7];
//나머지는 무시하고 4번째랑 6번째부터 나머지 출력
console.log(four);//4
console.log(rest2);//6,7

let obj = {
    oa: 'a',
    ob: 12,
    oc: 'c'
};

let {oa, ob} = obj;
console.log(`oa => ${oa}`);//a

let {oa : newA, ...others} = obj;
console.log(`newA => ${newA}`); //a
console.log(`others => ${others.ob}, ${others.oc}`);

//b?는 b의 값이 옵션값이라는 것
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;// b의 값이 없으면 1001로 할당
    console.log(`a => ${a}, b=> ${b}`);
}

keepWholeObject({a:'isA?'}); //b?: number 이기 때문에 없어도 에러 안남 , isA? 1001
keepWholeObject({a:'isA?',b:29});// isA? 29

/**
 * 전개 연산자 (spread)
 */

let f2 = [1,2];
let s2 = [3,4];

let both = [0, ...f2, ...s2, 5];
console.log(both);//0,1,2,3,4,5
f2[0] = 7;
console.log(both);//0,1,2,3,4,5

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };//왼쪽에서 오른쪽으로 가기 때문에 food의 값이 rich로 변경
console.log(search);//{food: "rich", price: "$$", ambiance: "noisy"}

search = {food: "rich", ...defaults};//rich가 spicy로 변경
console.log(search);//{food: "spicy", price: "$$", ambiance: "noisy"}
