// 1st generation way declear the function 

const doubleIt = function(num){

return num *2 ;


};

const result = doubleIt(27); 

console.log(result); 


// Es6 way declear function 

// const doubleIt =(num)=>num*2;

// const result = doubleIt(10);

// console.log(result);



// declare of function 
const doMath=(x , y)=>{

const sum = x+ y ; 
const diff = x-y ; 
const result = sum * diff ; 

return result ;

}

// const result = doMath( 7 , 5); 

// console.log(result)
