//basic syntx of while loop
//while(conditon){
    //statement
//}

let i = 1;
while (i <= 10){
    console.log(i);
    i++;
}

console.log("------------------")

let RamzanDay = 1;
let isRamzan = true;
while(isRamzan){
    
    if(RamzanDay == 30){
        isRamzan = false;
        console.log(`Ramzan is over`);
} else{
    console.log(`Yes we are selling pakoras`)
}
RamzanDay++;

}

console.log("--------------------------------------")

//basic syntax of do while loop
//do{
    //statement
//}
//while (condition);
const isFoodStale = false;
do{
    console.log(`eating.....`);

} while (isFoodStale);

//do while loop execute the statement first
let j = 11
do{
    console.log(7,"x",j,"=",7* j,"line 44")
    j++
}
while(j<= 10)//condition is false

console.log("==================================")

let hira = name
do{
    console.log()
}
