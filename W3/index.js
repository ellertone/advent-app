
console.log("Hello Ellertone")

/*
var sum = 10+15;
var sub =15-10;
let mul = 10*3;
let div = 9/ 13;
let mod = 10 %3;
*/

/*
var balance = 200;
var shoes = 300;
var coupon=500;

if (shoes<=balance)
{
    balance -=shoes;
    console.log("You just Bought some shoes");
    console.log("Balance is "+ balance);
}
else if(shoes-coupon <= balance )
{
    console.log("saved by the coupon");
    balance -= shoes - coupon
    console.log(balance)
}
else{
    console.log("You're broke!");
}
*/

// var val1 =23;
// var val2 = '23'

// if(val1 === val2){
//     console.log("same")

// } else{
//     console.log("not same")
// }

// var student = [ "John", "Timmy", "Peter", "Ryan", "Suba"];

// for (let i= 0; i < student.length; i++  ){
//     console.log(student[i]);
// }


//Functions
// function area(length, width){
//     return length * width;
// }


// let rectangles=[];
// rectangles.push(area(3,8));
// rectangles.push(area(5,12));
// rectangles.push(area(10,10));

// console.log(rectangles);

// let bankBalance = 500;
//  function makeTransaction(salePrice){
//     if(salePrice <= bankBalance){
//         bankBalance -= salePrice;
//         console.log("Purchase Successful. Balance = "+ bankBalance);
//     }
//     else {
//         console.log("Insufficient Balance. Current Balance is: "+ bankBalance);
//     }
//  }

//  makeTransaction(100);
//  makeTransaction(500);
//  makeTransaction(10);
//  makeTransaction(128);
 

 //objects

//  let student0 =  {
//     sname : "john",
//     age : 10, 
//     grade : "C" ,
//     greeting : function(){
//         return "Hi, I'm " + this.sname + "age is "+ this.age + " grade "+ grade;
//     }
//  };
// console.log(student0.greeting());

//  console.log(student.sname);
//  console.log(student.age);

// let student1= new Object();
// student1.sname = "Jonte";
// student1.age= 20;
// student1.grade= "A"

// let student2 = {};
// student2.sname =" zack";
// student2.age = 20;
// student2.grade = "D";

// let students =[];
// students.push(student0,student1,student2);

// for ( let i =0; i<students.length; i++ ){
//     console.log(students[i]);
// }

// let students = [];

// function student(first, last, age){
//     this.firstName = first;
//     this.lastName =last;
//     this.age = age;
//     this.greeting = function(){
//         return "Hi, i'm "+ this.firstName + " and  I'm " + this.age + " years old.";
//     }
// };

// // let s1 = new student("Jenny","Lager", "12");
// // console.log(s1, s1.greeting());


// students.push(new student("Jenny", "Leasy", "14"));
// students.push(new student("Over", "Means", "18"));


// // for (i = 0; i < students.length ; i++){
// //     let student = students[i];
// //     console.log(student.greeting());
// // };


// // for in
// var student = students[0];
// for (var key in student){
//     console.log(student[key])
// }
