function hello(name: string) {
    return "hello, " + name
}

let _name = "chaojie"

document.body.textContent = hello(_name)

// interface or struct in golang
interface Person {
    name: string
    age: string
}

function h(person: Person) {
    return person.name + person.age
}