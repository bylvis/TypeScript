// @flow
// 设定一个回调函数 
function foo(callback:(string,number)=>void){
    callback('string',123 )
}
// 函数类型限制 限制两个参数是string 和number 并且返回值是空
foo(function(str,n){
    
})