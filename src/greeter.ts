class Student {
    fullName: string
    constructor(firstName: string, middleInitial: string, lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstname: string
    lastname: string
}

function greeter(person: Person) {
    return "你好啊," + person.firstname + ' ' + person.lastname
}

let user = { firstname: 'Lee', lastname: 'Neo' };
document.body.innerText = greeter(user);


