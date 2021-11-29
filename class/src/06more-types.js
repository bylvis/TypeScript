// @flow

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