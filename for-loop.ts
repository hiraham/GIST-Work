//basic loops 

for(let i = 0; i < 10; i++){     // i =0,1,2,3,4,5
    console.log(i);
}
console.log("-------------------------")



for(let i = 5; i >= 0 ; i--){        //i = ,5,4,3,2,1,0
    console.log(i);
}
console.log("-------------------------")

//generate table using for loop 

for(let i = 1; i <= 10; i++){
    let tableNumber = 10;
    console.log(tableNumber,"x",i,"=",tableNumber*i);
}
console.log("----------or---------------")

for (let i = 1; i <= 10; i++){
    console.log(`2 x ${i} = ${2 * i}`);
}
console.log("----------or---------------")

for (let i = 1; i <= 10; i++){
    const tableNumber = 10;
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}



console.log('----------------------------------------------')

for(let k = 1; k <= 5; k++){
   
    console.log(k,"my name is hira");   
}

console.log("--------------------------------------")

//for loop with break statement that print odd number of times

for(let i = 1; i<= 10; i++){
    if(i % 2 === 0){
        continue; //means skip the rest of the code and go to the next
    }else {
        console.log(i);
    }
}
//for loop with break statement that print even number from 1 to 10

for(let i = 1;;i++){
    if(i > 10){
        break;
    }else{
        console.log(i);
    }
}
