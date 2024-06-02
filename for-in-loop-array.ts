//basic syntax of for in loop
//for(variable in array){
 //   statement
//}

const groceryItems: string[] =["butter","eggs","bread","jam","rusk","Milk"]
for(const item in groceryItems) {
    //console.log(`i have bought ${item})
    console.log(`i have brought ${groceryItems[item]}`)
   //console.log(`i have brought ` + groceryItems[items])
}