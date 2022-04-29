// let const var 声明变量的区别
// 1,函数外 var 声明的变量会挂载到window上去，相当于是全局的
let stra: String = 'l: 您好啊 leeneo';
const strb: String = 'c: 您好啊'
var strc: String = 'v: 您好啊'

// console.log(window.stra);
// console.log(window.strb);
console.log(window.strc);     // 这行在node里无法运行，用浏览器可以

// 2,let,var 可以先声明再赋值，const 必需声明的同时赋值，并且不能直接修改const的值
// 如果想改变const声明的变量，那就把它声明为一个内存地址（也就是对象），对象内部的值是可以随意修改的
var a;
let b;
// const c;     
console.log(a); // undefined
console.log(b); // undefined
// console.log(c);

// 3,作用域上面 var是全局的 let和const则是块级作用域的
if (true) {
    var blocka = 33;
    let blockb = 22;
    const blockc = 11;
    console.log('代码块内 var' + blocka)
    console.log('代码块内 let' + blockb)
    console.log('代码块内 const' + blockc)
}
console.log('代码块外 var' + blocka)        // 也就是说在另一个文件内也可以访问var 声明的变量
// console.log('代码块外 let'+blockb)       // 报错，not defined
// console.log('代码块外 const'+blockc)     // 报错, not defined

// 4,相同作用域内，var 变量可以重复声明，let 就不可以了
var slA='test var';
console.log(slA);
var slA='test same var'
console.log(slA);

let lA='test let';
// let lA='testA'   // error: lA has declared 
console.log(lA);

// 5,异步函数内作用域问题
// 每个setTimeout匿名函数内部的i都是同一个，因为setTimeout函数异步执行，即在for循环结束后执行
// 所以setTimeout内部的i 永远是10
for (var i = 0; i < 3; i++) {
    console.log('var i: ',i);    
    setTimeout(function() { console.log(i); }, 100 * i);
}
//输出3 3次

// 每个setTimeout 匿名函数内部的i都是独立的，因为作用域原因，for不能影响匿名函数内的i
for (let i = 0; i < 3; i++) {
    console.log('let i: ',i);    
    setTimeout(function() { console.log(i); }, 100 * i);
}
//输出0-2

// 可能上面的作用域不太好理解，那换个方式
for(var k=0;k<3;k++) {}
console.log('k: ',k);

for(let j=0;j<3;j++) {}    //作用域仅在for内有效
// console.log('j: ',j);   // 提示找不到j，虽然js代码依然可以执行，但是语法提示：这样写是错的

for(let i=0;i<2;i++) {
    var forVal='test For val'
}
if(true){
    var xhr='testX';
}
console.log(window.xhr);    //  可以访问到
console.log(window.forVal); //  可以访问到

function newTest(){
    var newVal='test'
}
// console.log('newVar: ',window.newVar);  //undefined 访问不到

