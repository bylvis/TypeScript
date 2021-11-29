# TypeScript 学习笔记

## 类型安全角度 强类型 弱类型
    强类型
        1.强类型参数会要求规范参数类型，不允许任意数据隐式类型转换。
        例如：python abs('foo')，会在语言层面直接报错。
    
    弱类型
        1.弱类型没有规范参数的类型，允许任意数据隐式类型转换。
        例如：'100'+50 = 150
        2.JS中所有的类型报错，都是通过逻辑判断手动抛出的。
        
    弱类型存在的问题：
        1.运行时才会报错
        2.sum(100,'100') 结果会是100100 类型不确定造成的各种问题
    
    强类型的优势：
        1.错误会更早暴露，编码阶段报错。
        2.代码更智能，编码更准确。(代码提示，更方便)。
        3.重构更牢靠。(后期可能要改变量名之类的，定位更准确。)
        4.减少不必要的类型判断。

## 类型检查角度 静态类型 动态类型
    静态类型
        一个变量声名时就是明确的，并且声名后不允许修改。
    动态类型
        运行时才明确变量类型，变量的类型随时可以改变。
        例如在JS里面：
            var foo = 100
            foo = 'bar'
        这样子是ok的
        理解：js变量是没有类型的，但是变量中存放的值是有类型的。
    
    JS是动态弱类型的，缺乏了类型系统的可靠性。
    是脚本语言，没有编译环节。 
    
## Javascript自由类型系统的问题

## Flow静态类型检查方案
    第一种：使用包管理工具
        1.npm init -y 创建环境
        2.npm install flow-bin 下载flow
        3.关闭VsCode的类型校验
        4.在package里面script里面 增加"flow": "flow"
        5.npm run flow init
        6.npm run flow 注意 路径不能有中文
        7.yarn flow-remove-types . -d dist 通过编译移除类型检测 
        yarn同理

    第二种: 使用babel
        1. yarn add @baben/core @babel/cli 在命令行中直接使用babel命令 @babel/preset-flow包含了转换flow类型转换注解的插件 --dev
        2. yarn babel src -d dist
    
    安装插件：flow Language Support
        直观看到类型错误

    Flow 类型推断
    flow会根据你的函数判断类型

## TypeScript语言规范与基本应用

### 类型规定
    const a:string = 'dasdasd'

    const b:number = 1233

    const c:number = Infinity//无穷大

    const d:boolean = false

    const e:null = null

    const f:void = undefined

    const g:symbol = Symbol()

### 数组规范
    const arr1: Array<number> = [1,2,3]
    const arr2: number[] = [1,2,3]

    // 表示固定长度数组 元组 返回多个返回值 
    const foo: [string,number] = ['asdasda',21312]

### 对象规范
    const obj1:{foo:string,bar:number} = {
    foo:'byl',
        bar: 123
    }
    const obj2:{foo?:string,bar:number} = {
        bar: 123
    }
    // 规定对象的key 和 value都是字符串
    const obj3:{[string]:string} = {}

### 函数规范
    // 设定一个回调函数 
    function foo(callback:(string,number)=>void){
        callback('string',123 )
    }
    // 函数类型限制 限制两个参数是string 和number 并且返回值是空
    foo(function(str,n){

    })

### Maybe类型
    // Maybe 类型
    // 规定必须存放foo
    const a:'foo'='foo'
    // 联合类型用法
    const type:'success'|'warning'|'danger' = 'success'

    type StringOrNumber = string|number
    const b:string|number = 'string'
    const c: StringOrNumber = 'string'
    //----------------------------------------------
    // 扩展了null和undefined 两个值
    const gender:?number = null

### Mix 和 Any
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

## 运行环境API
    const h:HTMLElement|null = document.getElementById('app')

# TypeScript正文
## TypeScript
    TypeScript = { JS+ES6+类型系统 }
    兼容性很好 可支持到ES3 最终编译成JS
    任何一种JS环境都支持
    渐进式 可以随便插入js
    1. yarn add typescript --dev 安装
    2. 写好.ts文件
    3. yarn tsc .\01-getting-started.ts 编译成js
## 配置文件
    严格模式下必须指定类型
    ts标准库 要使用es5以上的 要引用es5以上的标准库
## 中文错误消息
    yarn tsc --locale zh-CN
## 作用域问题
    1.通过立即执行函数来解决
    (function(){
        const a = 123
    })
    2.export{}
    把当前文件变成模块
## Object类型 array类型
    和前面一样
## 元组类型
    长度 类型确定
    const tuple:[number,string]=[18,'byl']
## 枚举类型
    // 不指定 值会累加 下面两个是1 2
    enum Post{
        Draft = 0,
        Unpublished,
        Published ,
    }
    // 也可以字符串枚举 aaa bbb ccc
    编译后会生成对应的js文件 枚举会被移除 枚举值会被替换为具体的数值

## 函数类型
    参数加问号代表可传可不传
    ...rest:number[]代表任意个数的数字
## any类型
    和上面一样
## 隐式类型推断
    let foo
    foo = 100
    foo = '21231'
    会推断成any

## 类型断言
    //建议每个变量添加明确类型
    const nums = [110,120,119]
    const res = nums.find(i=>i>0)
    const req = res * res
    // 断言 明确告诉它 这是number
    const num1 = res as number
    // 会和jsx冲突
    const num2 = <number>res
