// NAMESPACES are a way to group and organise related code
// STARTING WITH NAMESPACES
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtils.subtract = subtract;
})(MathUtils || (MathUtils = {}));
var StringUtils;
(function (StringUtils) {
    function add(a, b) {
        return a + b;
    }
    StringUtils.add = add;
    function subtract(a, b) {
        return a.replace(b, "");
    }
    StringUtils.subtract = subtract;
})(StringUtils || (StringUtils = {}));
const mathRes = MathUtils.add(1, 2);
console.log(mathRes); // 3
const strRes = StringUtils.subtract("abcd", "a");
console.log(strRes); // bcd
export {};
//# sourceMappingURL=index.js.map