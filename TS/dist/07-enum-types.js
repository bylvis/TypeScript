"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 不指定 值会累加 下面两个是1 2
var Post;
(function (Post) {
    Post[Post["Draft"] = 0] = "Draft";
    Post[Post["Unpublished"] = 1] = "Unpublished";
    Post[Post["Published"] = 2] = "Published";
})(Post || (Post = {}));
// 也可以字符串枚举 aaa bbb ccc
//# sourceMappingURL=07-enum-types.js.map