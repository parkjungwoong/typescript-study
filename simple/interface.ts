interface Person {
    name: string;
    age: number;
}

function greeter(person: Person) {
    return `name : ${person.name}, age : ${person.age}`;
}

let user = {name : 'pjw', age : 29};

greeter(user);