

// Inheritance of Class ;
class Parents{

    constructor(cEo){

        this.OrganizationCEO = "Sundor-Peci";

    }
}


class Child extends Parents {

 constructor  (sID ,sName ){
            super();
        this.id = sID ; 
        this.name = sName ; 
        this.OrgationName = " SNC software Organization" ; 
       

    }
}



const Employee = new Child(1002 , "Mohammed Kamal Ahmed");

console.log(Employee)