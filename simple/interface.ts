interface Person {
    name: string;
    age: number;
}

function greeter(person: Person) {
    return `name : ${person.name}, age : ${person.age}`;
}

let user = {name : 'pjw', age : 29};

greeter(user);


function func1(obj: {someVal: string}) {
    console.log(`val => ${obj.someVal}`);
}
func1({someVal:'asdbn'});
//func1('asd');//이건 안됨


interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };//LabelledValue의 속성이 맞으면 됨
printLabel(myObj);

/**
 * 프로퍼티를 비필수로 설정하기
 */

interface SquareConfig {
    color?: string;
    width?: number;
}

function func2(config: SquareConfig): SquareConfig{
    let defaultConfig = {} as SquareConfig;
    defaultConfig.color = 'red';
    defaultConfig.width = 10;

    return {...defaultConfig, ...config};
    /*
    return {...defaultConfig, ...config}의 표현식은

    if(config.color) defaultConfig.color = config.color
    if(config.width) defaultConfig.width = config.width
    return defaultConfig;

    이거와 같다..
     */
}

console.log(func2({}));//red, 10
console.log(func2({color: 'blue'}));//blue, 10
console.log(func2({color: 'green', width: 100})); //green, 100
console.log(func2({color: '', width: 0})); //'', 0

/**
 * 읽기 전용 프로퍼티, 객체 생성할때만 값 할당 가능, 생성 후 변경 불가
 */

interface Point {
    readonly x:number;
    readonly y:number;
}

let p1: Point = {x:10, y:10};
//p1.x = 11; readonly 속성이라 변경 안됨
let p2 = {} as Point;
//p2.x = 12; 이것도 안됨 생성할때만 값 할당 가능

/**
 * 함수 타입
 */

