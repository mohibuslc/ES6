


// Class Define 

class fatherName{

    constructor(){
        this.FatherName = "Md. Samir Ali" ; 

    }
}


class Child extends fatherName{

constructor(sID , sName){

    super();
    this.StudentID = sID ; 

    this.StudentName = sName ; 
    this.Institute = " Sylhet politecnic Institue"

}

}; 

const Employee = new Child( 1002 , "Mohammad Mohibur Rhman" )

console.log(Employee)