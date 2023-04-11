class Car{
    constructor(model,name){
        this.model = model;
        this.name = name;

    }
    start(){
        console.log(this.name)
    }
    end(){
        console.log(this.name +" car stopped")
    }
}
class ElectricalCar extends Car{
    dashboard(){
        console.log("Child method")
    }
    running(){
        super.start();
        super.end();
        this.dashboard();
    }
}
evCar = new ElectricalCar("Telsa","A320")
evCar.running();

