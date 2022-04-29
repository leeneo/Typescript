"use strict";
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
function greeter(person) {
    return "你好啊," + person.firstname + ' ' + person.lastname;
}
let user = { firstname: 'Lee', lastname: 'Neo' };
document.body.innerText = greeter(user);
