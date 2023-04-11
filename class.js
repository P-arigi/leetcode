class Car{
    constructor(model,name){
        this.model = model;
        this.name = name;
    }
    start(){
        console.log(this.name + this.model);
    }
}

bmw = new Car(620,'Sports Edition')
bmw.start()