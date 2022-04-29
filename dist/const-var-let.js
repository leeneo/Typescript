"use strict";
let stra = 'l: 您好啊 leeneo';
const strb = 'c: 您好啊';
var strc = 'v: 您好啊';
console.log(window.strc);
var a;
let b;
console.log(a);
console.log(b);
if (true) {
    var blocka = 33;
    let blockb = 22;
    const blockc = 11;
    console.log('代码块内 var' + blocka);
    console.log('代码块内 let' + blockb);
    console.log('代码块内 const' + blockc);
}
console.log('代码块外 var' + blocka);
var slA = 'test var';
console.log(slA);
var slA = 'test same var';
console.log(slA);
let lA = 'test let';
console.log(lA);
for (var i = 0; i < 3; i++) {
    console.log('var i: ', i);
    setTimeout(function () { console.log(i); }, 100 * i);
}
for (let i = 0; i < 3; i++) {
    console.log('let i: ', i);
    setTimeout(function () { console.log(i); }, 100 * i);
}
for (var k = 0; k < 3; k++) { }
console.log('k: ', k);
for (let j = 0; j < 3; j++) { }
for (let i = 0; i < 2; i++) {
    var forVal = 'test For val';
}
if (true) {
    var xhr = 'testX';
}
console.log(window.xhr);
console.log(window.forVal);
function newTest() {
    var newVal = 'test';
}
