"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function creatArray(length, value) {
    const arr = Array(length).fill(value);
    return arr;
}
const res = creatArray(3, 'foo');
console.log(res);
//# sourceMappingURL=18-generics.js.map