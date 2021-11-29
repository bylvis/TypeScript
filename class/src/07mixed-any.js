// @flow
// mix类型相当于联合类型 Number|sting|......
// 但是它是强类型
function passMixed(value:mixed){

}
passMixed('string')
passMixed(100)
// ---------------------------------\
// any是弱类型
function passAny(value:any){

}
passAny('string')
passAny(123)