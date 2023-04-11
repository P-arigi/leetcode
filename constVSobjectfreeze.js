/*const value = "Monday"

value = "Tuesday"
//IT will give TypeError: the assignment to constant variable.
console.log(value)*/

const person = {
    name:"Akhila"  //It will give name is Akhila but it will not give any error.
}
Object.freeze(person)
person.name = "Hello World"
console.log(person)