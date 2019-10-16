class Student {
    name: string;

    constructor(public firstNm: string, public lastNm: string) {
        this.name = `${firstNm} ${lastNm}`;
    }
}

interface Person {
    name: string;
    age: number;
}

function f(person: Person) {
    return `${person.name} - ${person.age}`;
}

let user = new Student('a','b');

//f(user); 타입이 달라서 안됨

class PersonClass implements Person {
    age: number;
    name: string;

    constructor(public firstNm: string, public lastNm: string, public _age: number) {
        this.name = `${firstNm} ${lastNm}`;
        this.age = _age;
    }
}

let personClass = new PersonClass('a','b',10);

f(personClass);// person 타입이라 가능함