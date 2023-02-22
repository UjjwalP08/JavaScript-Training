console.log("ES6 Tutorial");

// let and const in ES6
// let use for the block scope and const use for the constant value
// let u_name = "Ujjwal"
// const pass = '1234';

// Template Literals

// console.log(`Your login Credentials is ${u_name} and ${pass}`);

// let str = `Your Name is ${u_name}. `;

// console.log(str.startsWith('Y'));
// console.log(str.endsWith('Y'));
// console.log(str.includes('jj'));
// console.log(str.repeat(4));




// ---------------------------> Arrow Function <---------------------------
// const avar = () => {
//     // code here
//     console.log("It's an arrow function");
// }
// avar();

// let var1;

// var1 = (curr, index) => {
//     // code here
//     // console.log(`Value of the curr and index is ${curr} and ${index}+1`);
// }

// var1();

// const year =  [1998,1980,2003,2002,2008];

// let ages = year.map((el,index) => `Age elements ${index + 1}:${2022-el}.`);
// // console.log(ages);


// // keyword and the data-structure you want to iterate
// for (const item of year) {
//     console.log(item);    
// }



// ---------------------------> Spread Operator <---------------------------
// no need to write the extra paramerter only use ... operator
// it is use in the function call

const smith_family = ['smith','stark','steve','bruis']

const miller_family = ['miller','michel','wilimsion','virat'];

// use in function call
const mix_family = [...smith_family,...miller_family];

// console.log(mix_family);

// 1st way to traverse
// for (const member of mix_family)
//     console.log(member);

// 2nd way to traverse
// mix_family.forEach(ele => console.log(ele));





// ---------------------------> Rest parameter <---------------------------
// use in the function declaration
// same as the spread operator

// use in the function declaration
// function isFullAge(limit, ...years)
// {
//     years.forEach(curr => console.log((2023-curr) >= limit));
// }

// isFullAge(20,1990,2004,1999,2006,2013);


// ---------------------------> Defalut parameter <---------------------------
// directly declare when you declare the constructor

// function Empolyee (f_name,l_name = 'patel',joingYear = 2023,salary = 30000)
// {
//     this.f_name = f_name;
//     this.l_name = l_name;
//     this.joingYear = joingYear
//     this.salary = salary;

// }

// let emp1 = new Empolyee('Ujjwal');
// console.log(emp1);

// let emp2 = new Empolyee('Xyz','Rahi',2022,50000);
// console.log(emp2);


// ---------------------------> Maps <---------------------------

// const map1 = new Map();

// // map1.set(key,value)

// map1.set('question','what is your favourite sports?');
// map1.set(1,'cricket');
// map1.set(2,'chess');
// map1.set(3,'football');
// map1.set(4,'GOW');
// map1.set('correct',4);
// map1.set(true,'Correct answer')
// map1.set(false,'Wrong!!! try again!!!!')

// // console.log(map1);
// // console.log(map1.size);
// // map1.delete(4);
// // map1.clear()
// console.log(map1);

// map1.forEach((value,key) => console.log(`In you Map key is ${key} and value is ${value}`));


// ---------------------------> Classes in ES6 <---------------------------

// class Person{
//     constructor(name,BirthYear,job){
//         this.name = name;
//         this.BirthYear = BirthYear;
//         this.job = job;
//     }
//     calcage(){
//          var age = new Date().getFullYear();
//         age = age - this.BirthYear
//         console.log(age);
//     }
// }

// let p1 = new Person('Ujjwal',2002,'Intern');

// // console.log(p1);
// // console.log(p1.name);
// // console.log(p1.BirthYear);
// // console.log(p1.job);
// p1.calcage();


