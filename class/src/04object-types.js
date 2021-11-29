// @flow
const obj1:{foo:string,bar:number} = {
    foo:'byl',
    bar: 123
}
const obj2:{foo?:string,bar:number} = {
    bar: 123
}
// 规定对象的key 和 value都是字符串
const obj3:{[string]:string} = {}
obj3.key1 = 'value1'
obj3.key2 = 'value2'