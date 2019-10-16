let isDone: boolean = false;

//모든 숫자는 부동 소수점
let amt: number = 100;

//배열을 2가지 방식으로
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let tuple: [string, number] = ['',10]; //순서가 맞아야됨

enum Enum {
    R, G, B
}

let e: Enum = Enum.B;

let notSure: any = 4;
notSure = 'asd';

function warnUser() :void {
    //return ''; 리턴 타입이 void 라서 안됨
}

//어떤 다른 타입도 Never에 사용 불가능하며 오로지 exception과 같이 throw되는 함수에 주로 사용한다.
function error(meg: string): never {
    throw new Error(meg);
}

//형 변환
let someVal: any = "string";
let strLen: number = (someVal as string).length;
//또는 (<string>someVal).length;

