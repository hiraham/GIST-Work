function introduction(): void{
    console.log("Hi my name is Hira")
    console.log("i am a Muslim")
    console.log("i live in Karachi")
    console.log("i amm a Software Engineer")
}
introduction();

console.log("-----------------------------------------") 

//function with perameter

function myIntroductionwithParameters(name:string,country:string,job:string): void{           //requried perameter
    console.log("Hi my name is" ,name)
    console.log(`i live in ${country}`)
    console.log("i am a " + job)
    console.log("-----------------------------------")
}

myIntroductionwithParameters("Hira","Karachi","Software Engineer");    //invoked function with perameter
myIntroductionwithParameters('HINA','KARACHI','BEAUITICIAN');
myIntroductionwithParameters('HIBA','KARACHI',' ENGINERS');
myIntroductionwithParameters('HANIA','INDIA','TEACHER');




console.log("-----------------------------------------")

//function with defult perameter            //requried perameter

function myIntroductionWithDefaultParameters(name:string,country:string = 'pakistan',job:string = 'teacher'):void{ 
     console.log("Hi my name is" ,name) //argument
     console.log(`i live in ${country}`) //temple string
     console.log("i am a " + job)         //concatination
     console.log("-----------------------------------")
}
myIntroductionWithDefaultParameters("ali");
myIntroductionWithDefaultParameters('john cena','USA','actor' );

//function with optional perameters

function myIntroductionWithOptionalParameters(name:string,country?:string,job?:string):void{
    console.log("Hi my name is" ,name)
    console.log(`i live in ${country}`)
    if(job){
    console.log("i am a " + job)
    }
    console.log("-----------------------------------")
}

myIntroductionWithOptionalParameters("baber",'pakistan');
myIntroductionWithOptionalParameters('jawad','USA','actor' );

//function with return type
function glassToGrams(glass: number):number{
    return glass * 250;
}

const result:number = glassToGrams(5);
console.log(result + " grams");
console.log("------------------------------------")

//funstion expression

const myJob = function():void{
    console.log("i am a teacher");
}

myJob();//invoking the function

console.log("------------------------------------")

//function decleration with hosting

myJob2();//invoking the function or calling the function

function myJob2():void{
    console.log("i am a sales man");
}

//self invoking function

//   ( function ():void {
 //   console.log("this is a self invoking function");
//}
//)();

//arrow functions
const multiply = (num1:number,num2:number) =>   num1 * num2 ;//short way of arrow function single line
const addition = (num1:number,num2:number) =>  {return num1 + num2 };//long way of arrow function but preferred


const result2 = multiply(5,10); //invoke and store output in variable
const result3 = addition(5,10);

console.log(result2);
console.log("---------------------")
console.log(result3);
console.log("----------------------------------------")

//rest perameter

console.log(1,2,3,4,5,6,7,8)

console.log("-----------------------------------");

const sumAllNumbers = (...myNumbers : number[]): number | void =>{

    let total = 0
    for(const num of myNumbers){
        total += num;
    }
    return total;
}
const result4:number | void = sumAllNumbers(1,2,3,4,5,6,7,8);


//practice home work


console.log("------------------------------------");

function identlyCard(name:string,course:string, city:string,): void{
    console.log("------   identlyCard ----- ");
    console.log(`name: ${name}  `);
    console.log(`course: ${course}`);
    console.log(`city: ${city}`);
}
identlyCard("hira","phython","karachi");
identlyCard("hina","javascript","karachi");
identlyCard("ali","typescript","karachi");
identlyCard("zubair","web developer","karachi");
identlyCard("aimen","teacher","karachi");

console.log("--------------------------------------------")

function addmissionForm (name:string,father : string, course: string){
    console.log("*-----------Admission Form-----------------");
    console.log(`1 Name:${name}`);
    console.log(`2 Father Name: ${father}`);
    console.log(`3 course: ${course}`);
}

addmissionForm("hasseb","Aftab","web development");
addmissionForm("Affan","Akter","web development");
addmissionForm("hassan","Hammad","web development");



















