const arr1:Array<number> = [1,2,3]
const arr2:number[]=[1,2,3]
// ----------------------------------------
function sum(...args:number[]){
    // 判断是不是数组 每个成员
    return args.reduce((prev,current)=>prev+current)
}
sum(1,2,3)