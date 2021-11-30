"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    eat(food) {
        console.log(`dog eat ${food}`);
    }
}
class dog extends Animal {
    run(speed) {
        console.log(`dog run ${speed}`);
    }
}
const Dog = new dog();
Dog.eat('shit');
Dog.run('fast');
//# sourceMappingURL=17-class-abstract.js.map