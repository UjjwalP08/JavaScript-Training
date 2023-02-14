console.log("Advance Javascript Objects and Function");

// In JS we use of call constructor insted of class to create object instances

// Create Constructor using the function and name of Constructor first letter is always capital
var Person = function(name,occupation,yearOfBirth)
{
    this.name = name;
    this.occupation = occupation;
    this.yearOfBirth = yearOfBirth;
}

// To use inheritance we use the prototype keyword
Person.prototype.calcage = function()
{
    console.log(2023-this.yearOfBirth);
}

var ujjwal = new Person("ujjwal","Student",2002);

var smit = new Person("smital","Doctor",2000);

var ayushman = new Person("ayushman","Student",2004);

// Inherit the calcage() method
// ujjwal.calcage()
// smit.calcage()
// ayushman.calcage()

// console.log(ujjwal.yearOfBirth)
// console.log(ujjwal['yearOfBirth']);

// Create the object using 2nd method
var Employee = {
    Department:"R&D"
}
// Create object using the Object.create() method

// 1st way to use the Object.create Method
var pers1 = Object.create(Employee);
pers1.name = "Harry";
pers1.emp_id = 23;
pers1.salary = 35000;

// console.log(pers1);

// 2nd way to use the Object.create Method
var pers2 = Object.create(Employee,{
    name : {value:"Ujjwal"},
    emp_id:{value:31},
    salary:{value:100000}
});

// console.log(pers2);

// --------------------------------> First Class Function <--------------------------------
// first class function means that the the function whic is use as argument/variable/parameter in the another  function

// var yearOfBirth = [2000,2002,2004,2006,1997,1983,2009];

// function arraycalc(arr,functn)
// {
//     var arrAns = [];
//     for(let i = 0;i<arr.length;i++)
//     {
//         arrAns.push(functn(arr[i]));
//     }

//     return arrAns;
// }

// // function that calculate the all age of the array
// function ageclac(ele)
// {
//     return 2023-ele;
// }

// var ages = arraycalc(yearOfBirth,ageclac);
// console.log(ages);

// // function that return true if age is grater or equal to 18
// function isYoung(ele)
// {
//     return ele>=18;
// }

// var young = arraycalc(ages,isYoung);
// console.log(young)

// // function that return the heart rate of perosn if person age is between 18 to 81
// function HearRate(ele)
// {
//     if(ele>=18 && ele<=81)
//     {
//         return (Math.round(206.9 - (0.67 * ele)));
//     }
//     else
//         return -1;
// }
// var hrates = arraycalc(ages,HearRate);
// console.log(hrates);

// here arraycalc is a genric function 
// but  agecalc,isYoung,HeartRate us a first class function

// --------------------------------> IIFE <--------------------------------
                // Immediately Invoked Function Expression

    // (function (){
    //     var score = Math.random()*10;
    //     console.log(score >= 5)
    // })();
    // need show the true or false value but no need to show the score variable value


// --------------------------------> Closure <--------------------------------
// Closuer is the combination of return function together with it's lexical environment
//  function init()
//  {
//     let name = "Harry";

//         function displayName()
//         {
//             console.log(name);
//         }
//         // name = 'Ujjwal';
//         // name = "smit";

//         return displayName;
//  }
// //  if we update the name variable it upadate when the funcion is return
// // Because in the clousure follw th lexical environment it mean it return the value of reference not the value
//     var c = init();
//     c();


// .call()  function for use to the borrow the method of the another instance 1st  arugument is the instance_name that going to borrow the method of the object
// .bind() method genrate the copy of the function and 1st argrument is always this


// --------------------------------> Project  <--------------------------------

// 1. Build a function constructor catted Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adequate data structure here,
// array, object, etc.)
// c) correct answer (I would use a number for this)

var Question = function(questn,answer,correct_answer)
{
    this.questn = questn;
    this.answer = answer;
    this.correct_answer = correct_answer;
}


// 
Question.prototype.displayQuestion = function(){
    console.log(this.questn);

    // Print the option of the question
    for(var i = 0;i<this.answer.length;i++)
    {
        console.log(i + " --> "+this.answer[i]);
    }
};



// 2. Create a couple of questions using the constructor
var q1 = new Question("What is your favourite language?",ans=["js","html","css"],0);
var q2 = new Question("What is your favourite framework?",ans["react js","Angular js","Tailwind css"],2);
var q3 = new Question("What is your favourite game?",ans=["pubg","gow","gta"],1);
var q4 = new Question("What is your favourite processor?",ans=["i9","i7","i5"],0);

// console.log(q1.correct_answer);

// 3. Store them all inside an array
var questns = [q1,q2,q3,q4];


var Q_no =  Math.floor(Math.random()*questns.length)  ;

// console.log(Q_no);

questns[Q_no].displayQuestion();

// Check wethere user enter correct answer or not
var user_answer = parseInt(prompt("Enter Your answer "));

// Prototype for the verify the answer
Question.prototype.checkAnswer = function(ans)
{
    if(this.correct_answer === ans)
    console.log("Correct answer!!!");
else
    console.log("Incorrect answer!!!");
}

questns[Q_no].checkAnswer(user_answer);

