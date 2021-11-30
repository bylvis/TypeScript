"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age) {
        this.age = age,
            this.name = name;
    }
    sayHi(msg) {
        console.log(`i am ${this.name} ${msg}`);
        return 1;
    }
}
const tom = new Person('tom', 18);
console.log(tom.name);
// 被标记为私有属性
// console.log(tom.age);
// 受保护
// console.log(tom.gender); 
class Student {
    constructor(age) {
        this.age = age;
    }
    static create(age) {
        return new Student(age);
    }
}
// 通过调用类的方法创建类的实例
const stu = Student.create(18);
//# sourceMappingURL=14-class-modifiers.js.map