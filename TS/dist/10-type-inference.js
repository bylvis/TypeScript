"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let foo;
foo = 100;
foo = '21231';
//建议每个变量添加明确类型
const nums = [110, 120, 119];
const res = nums.find(i => i > 0);
const req = res * res;
// 断言 明确告诉它 这是number
const num1 = res;
// 会和jsx冲突
const num2 = res;
//# sourceMappingURL=10-type-inference.js.map