//what is an object in typescript
//object is a data structure that store key-vale pair

//basic syntex of object

//const objName = {
// key: value,
// key: value,
// key: value, //can be string ,number, boolein,array,object ,funvtion etc
//}
//ye object literal ka tareeqa ha.
const myCar ={
    brand: 'suzuki',//property
    model: '2019', //number property
    name: 'mehran',//string property
    colour:'white',//string property
    aviableColour:['black','red','green','yellow'], //array property
};

console.log(myCar); //log whole object

//accessing object properties
console.log(myCar.brand); //log only brand property using first way of access property
console.log(myCar.model); //log model property
console.log(myCar.name); //log name property

console.log("===============================");

const  person ={
    firstName: "isfhan",
    lastName:"ahmed",
    age:"30",
    country:"pakistan",
    skincolour:"wheatish",

}
console.log(person);

//asssessing object properties
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.country);

//object methods
const personTwo  = {
    firstName: "ali",
    lastName :"ahmed",
    age: "45",
    country:"india",
    skinColour:"brown",
    fullName:function (){

    console.log(this.firstName +" " + this.lastName);
},

sayHello: () => {
    console.log("line 56",this)
}
}
    personTwo.fullName();//invoke object method
    personTwo.sayHello();//invo
 
console.log("--------------------------------------")




