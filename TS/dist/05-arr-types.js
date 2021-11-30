const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
// ----------------------------------------
function sum(...args) {
    // 判断是不是数组 每个成员
    return args.reduce((prev, current) => prev + current);
}
sum(1, 2, 3);
//# sourceMappingURL=05-arr-types.js.map