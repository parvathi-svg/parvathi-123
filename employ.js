class Employee{

    Employee(){
        this.id=1001;
        this.name="Jithendra"
    }

    display(){
        console.log(this.id+" "+this.name)
    }
}
let e=new Employee();
e.display();