# 기본기 연습

## 목차
- [javascript](#javascript-특정-정리)
- [typescript](#typescript-특정-정리)

## ts -> js 변경 방법
```
tsc 파일명
```

## 참고링크
- [Mozilla 자바스크립트 기초 가이드](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
- [javascript 기초, 심화 가이드](https://helloworldjavascript.net/)
- [typescript 기초 문법](https://typescript-kr.github.io/)
- [IIFE 표현식](http://chanlee.github.io/2014/01/11/understand-javascript-iife/)

## javascript 특정 정리
### 큰 개념
- 코어(ECMAScript), 문서객체모델(DOM), 브라우저 객체 모델(BOM)로 나뉠수 있음
- 브라우저, 노드, 등은 코어(ECMAScript)를 구현하는 호스팅 환경일 뿐 코어(ECMAScript)는 브라우저에 종속되지 않는다.
- 문서객체모델(DOM)은 전체페이지를 노드 계층 구조로 변환하여 표현한다.
- 브라우저 객체 모델(BOM)은 브라우저를 조작하는 메소드와 인터페이스이다. 새창을 띄운다거나 쿠기 XMLHttpRequest같은거 조작할때

### 데이터 타입
#### 종류
- 원시 타입: number, string, boolean, undefined, null
- 참조 타임: object
    - object안에 array, function, RegExp

#### 원시 타입
- number 타입
    - 모든 값이 64비트 부동 소수점 형태
    - 비정상값일 경우 NaN 반환, isNaN() 으로 검사 가능, NaN끼리도 같지 않으니 isNaN()으로 검사
    
- string 타입
    - 불변값, 문자열중 특정 문자만 변경하는건 불가능 str[0]='c' 이런식으로 안됨
    - 문자열 배열과 비슷한 메소드를 갖지만 같지 않음
    
- undefined, null
    - 변수 선언시 undefined으로 초기화됨
     
#### 참조 타입
- object 타입
    - key, value 형태로 프로퍼티들을 저장하는 객체
    - 원시타입의 프로퍼티를 갖거나 함수를 갖을 수 도 있다.
    - 객체 리터널이라는 단어는 {} 표현식으로 객체를 생성하는것을 말함, ex) var obj = {};

#### 원시(객체) 래퍼 타입
- 원시값에 프로퍼티나 메소드가 없어 .length 와 같은 걸 이용하기 위해 래퍼로 감싸줘야함
- 특별한 변환 없이 원시타입.메소드 처럼 표현할 경우 알아서 각 타입별 호출 가능한 표준 메소드를 호출한다.\
단, 해당 행 실행시만 객체 형태로 변환 후 사용하고 다시 원래의 원시 타입으로 돌아간다.


### Prototype
 - 자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연되어 있음
 - 상속개념처럼 부모의 프로퍼티를 사용가능한 이유가 부모 프로토타입과 연결되어 있어서 가능한것임
 - 부모 객체를 프로토타입(Prototype) 객체라고 부름
 - 각 타입에 따라 다른 프로토타입 객체를 갖는다.
    - Object.prototype : 모든 객체의 최상위 부모
    - Array.prototype : 배열 객체의 부모  
    - Function.prototype : 함수 객체의 부모
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F2714704B57E008610330BC" height="30%">
 - 객체를 생성할 때 결정된 프로토타입 객체를 임의의 다른 객체로 변경도 가능, 상속 기능 구현 가능
 - 객체 리터널과 생성자 함수 방식에서 차이로 Prototype 객체가 다름이 있다.
    - 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정
    - 객체 리터널 (var obj = {}): Object.prototype
    - 생성자 함수 (var obj = new Person()): Person.prototype
 
    
### 메모리 구조
#### 값의 변경, 사용 케이스에 대한 내용
- 데이터 타입에 따라 내부 메모리의 참조가 다르게 적용된다.
    - 원시 타입
    ```
    var value1 = 1;
    var value2 = value1;//value1의 값이 value2로 복사된다. 
    //value1의 주소와 value2 주소가 다르다!, 참조가 아님 값의 복사
    
    함에서 값을 넘길때도 Call By Value 로 동작
    ```
    - 참조 타입
    ```
    var obj1 = {};
    var obj2 = obj1;//obj2는 obj1의 주소를 가르키고 있다. 즉 obj1이 변경되면 obj2도 변경
    
    함에서 값을 넘길때도 Call By Reference 로 동작, 함수 내에서 값 변경시 전달값도 변경되니 주의
    ```
#### 실행 컨텍스트
- 실행 가능한 자바스크립트 코드 블록이 실행되는 환경이다.
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile10.uf.tistory.com%2Fimage%2F2353AF4257E48696136CF7" height="30%">
- 실행 컨텍스트의 생성 순서
    1. 활성 객체 생성
    2. arguments 객체 생성
    3. 스코프 정보 생성
    4. 변수 생성, undefined, function, 등으로 초기화됨
    5. this 바인딩
    6. 코드 실행

#### 스코프
- 변수와 함수를 접근할 수 있는 유효 범위, 스코프 단위는 오직 함수만이다. for, if와 같은 블록은 스코프 범위가 아니다.
- 함수 실행 컨텍스트 내 연결리스트형식으로 관리되며 scope 프로퍼티로 있다.
```
// 함수를 호출한 경우 var name = 'oppa'; 
function say() { 
    var name = 'coding'; 
    console.log(name); // 'coding' 
} 
say(); 
console.log(name); // 'oppa'

//첫 번째 객체에서 대응되는 프로퍼티를 발견하지 못한다면, 다음 객체로 이동하는 식으로 찾을 때가지 계속된다.(= 스코프 체이닝)
```
<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F2231714557E7E359208A75" height="30%">

### 함수
#### 특징
- 1급 객체이다.
- 익명으로 생성 가능
- 객체임으로 프로퍼티를 갖는다.
- 함수 스코프안에 있는 프로퍼티는 함수 스코프 밖에서 호출이 불가하다.
- 케이스에 따라 콜백함수, 즉시실행함수, 내부함수, 등으로 나눌수도 있다. 

#### 기본 프로퍼티
- 함수 생성시 기본적으로 표준 프로퍼티가 정의된다.
- arguments, caller, length, name, prototype, 등
- prototype(중요)
    - 객체이다.
    - 함수 생성시 constructor 프로퍼티 하나만 갖고 있는 객체로 생성된다.
    - constructor 프로퍼티는 함수의 주소를 갖고 있다.
    - 함수의 prototype는 prototype객체의 주소를 갖고 있다. 즉 서로의 주소를 갖고 있음
    - 모든 객체의 부모를 나타내는 내부 프로퍼티인 Prototype과 다른 것이다.
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F253B003457DF7238090D52" height="30%">
- 
#### 함수호이스팅
- 함수 선언 위치에 상관없이 유효범위내에서 함수의 호출이 가능하다.
```
console.log(sum(10, 10)); // 20 
// 함수 선언문 방식 
function sum(num1, num2) 
{ return sum1 + sum2; }
```
- 이유는 실행 컨텍스트의 생성 순서 때문이다.\
    1. 활성 객체 생성
    2. arguments 객체 생성
    3. 스코프 정보 생성
    4. *변수 생성* -> 이 때 이미 함수가 등록된다.
    5. this 바인딩
    6. 코드 실행
 
### this
- 객체의 메소드 호출: 해당 메소드를 호출한 객체
- 함수를 호출: 전역 객체, window와 같은 객체
- 생성자 함수를 호출: 새로 생성되는 객체
- 주의
    - 내부 함수에서 this 호출시 전역 객체로 할당된다.
    <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile3.uf.tistory.com%2Fimage%2F250EF73C57E33E18233B83" height="30%">

### 용어
- 일급 객체
    - 일급 객체의 3가지 조건
        1. 변수에 할당 가능
        2. 객체의 인자값으로 전달 가능
        3. 객체의 리턴값으로 반환 가능
        
- 리터널
    - 변수, 객체, 등의 생성 표현식, ** 리터널이라고 부른다.
    - 객체 리터널 : _var obj = {};_ '{}' 이게 객체 리터널
    - 배열 리터널 : _var arry = [];_ '[]' 이게 배열 리터널
    
- 부동 소수점
    - 표현 범위 : 
    - 값을 정확하게 표현 가능한가?

- 프로토타입 체이닝
    - 자신의 프로퍼티 외 부모의 프로토타입 객체의 프로퍼티를 자신의 것처럼 접근

- 스코프 체이닝
    - 실행 컨텍스트의 스코프 객체에서 대응되는 프로퍼티를 찾지 못하면 다음 객체로 이동하여 계속 찾는다.
    
- 클로저
    - 이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수
    
- 콜백 함수
    - 이벤트가 발생하였을때 이벤트 발생 결과를 함수를 통해 전달하는 방식
    - 자바스크립트에서는 대표적으로 이벤트 핸들러 처리, window.onload와 같은 메소드
    
## typescript 특정 정리