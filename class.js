// inharetance class 

class Boss{

    constructor(Boss_Name){

        this.Boss_Name=" Sundor-Pecio"
    }
}

// class  

class Child extends Boss{

    constructor(eID , eName){

            super()
        this.ID = eID ; 

        this.EmployeeName = eName ; 
        this.CompanyName = "Sys-Soft" ; 

    }
}

const Employee = new Child( 1009 , 'Jamal-Ahmed'); 

console.log(Employee) ; 
