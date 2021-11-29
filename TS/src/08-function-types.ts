export{}
// ...rest:number[]代表任意个数的数字
function func1(a:number,b?:number,...rest:number[]):string{
    return 'func1'
}
func1(100,200)