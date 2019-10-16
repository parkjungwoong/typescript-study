var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
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
for (var i = 0; i < 10; i++) {
    console.log(i);
}
i = 1; //var는 가능
for (var j = 0; j < 10; j++) {
}
//j=1; 접근 불가
/**
 * 비구조화
 */
var input = [1, 2];
var first = input[0], second = input[1];
// let first = input[0]; let second = input[1]; 와 동일함
_a = [second, first], first = _a[0], second = _a[1]; //변수 교환도 가능함
var _b = [1, 2, 3, 4, 5], firstN = _b[0], rest = _b.slice(1);
console.log(firstN); //1
console.log(rest); //2,3,4,5
var _c = [1, 2, 3, 4, 5, 6, 7], four = _c[3], rest2 = _c.slice(5);
//나머지는 무시하고 4번째랑 6번째부터 나머지 출력
console.log(four); //4
console.log(rest2); //6,7
var obj = {
    oa: 'a',
    ob: 12,
    oc: 'c'
};
var oa = obj.oa, ob = obj.ob;
console.log("oa => " + oa); //a
var newA = obj.oa, others = __rest(obj, ["oa"]);
console.log("newA => " + newA); //a
console.log("others => " + others.ob + ", " + others.oc);
//b?는 b의 값이 옵션값이라는 것
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a; // b의 값이 없으면 1001로 할당
    console.log("a => " + a + ", b=> " + b);
}
keepWholeObject({ a: 'isA?' }); //b?: number 이기 때문에 없어도 에러 안남 , isA? 1001
keepWholeObject({ a: 'isA?', b: 29 }); // isA? 29
/**
 * 전개 연산자 (spread)
 */
var f2 = [1, 2];
var s2 = [3, 4];
var both = __spreadArrays([0], f2, s2, [5]);
console.log(both); //0,1,2,3,4,5
f2[0] = 7;
console.log(both); //0,1,2,3,4,5
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
console.log(search); //{food: "rich", price: "$$", ambiance: "noisy"}
search = __assign({ food: "rich" }, defaults);
console.log(search); //{food: "rich", price: "$$", ambiance: "noisy"}
