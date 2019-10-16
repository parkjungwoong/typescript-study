//타입 어노테이션 => 변수명: 타입 형식으로 작성
function greeter(person: string) {
    return `hello ${person}`;
}

let user = [0,1,2];

//document.body.innerText = greeter(user); -> 타입이 달라서 안됨