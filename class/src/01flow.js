// @flow
function sum(a: number,b: number){
    return a+b
}
sum(100,50)
// sum(100,'50')
function square(n){
    return n*n
}
// square(das)
// 返回值类型规定
function foo(): number{
    return 111
}
function foo1(): void{
    // return 'das'
}
