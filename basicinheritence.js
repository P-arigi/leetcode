//Parent Class
class Person{
    constructor(name) {
        this.name  = name;
        
    }
    greet(){
        console.log("Hello from " + this.name)
    }
}

//Child class
class Student extends Person{

}

let student1 = new Student("Akhila")
student1.greet();