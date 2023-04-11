class Person{
    constructor(name) {
        this.name = name;
        this.occupation = "Software Developer"
        
    }
    greet(){
        console.log("Hello " + this.name)
    }
}

class Student extends Person{
    constructor(name){
        super(name);

//overriding an occupation property
        this.occupation = "Student";
    }

    //overriding persons method
    greet(){
        console.log("Hello student " + this.name);
        console.log("Occupation: " + this.occupation);
    }
}

let p = new Student("Akhila")
p.greet();