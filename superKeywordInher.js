class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello from " + this.name )
    }
}
class Student extends Person{

    constructor(name){
        console.log("Creating student class")

        super(name);
    }
}

var student1 = new Student("Akhila")
student1.greet();