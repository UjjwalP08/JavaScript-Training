console.log('Async JavaScript');

//  Simple Async JavaScript Nature
// const second = () => {

//     setTimeout(() => {
//         console.log("end");
//     }, 3000);

// }

// const first = ()=>{

//     console.log('start');
//     second()
//     console.log('Start Again');

// }

// first();


// -------------------------> Callback Hell <-------------------------

// function getRecipe()
// {
//     setTimeout(() => {
//         const recipeId = [123,556,948,539];
//         console.log(recipeId);

//         setTimeout((ids) => {
//             const recipe_obj = {title:'Fresh Aalupuri',chef:"Ujjwal Patel"}
//             console.log(`The new recipe id ${ids} and name is ${recipe_obj.title}`);

//             setTimeout((chef) => {
//                 const obj = {title:'Frankie',chef:'Mark Jonas'}
//                 console.log(obj);
//             }, 2500,recipe_obj.chef);

//         }, 2500,recipeId[1]);

//     }, 2500);


// }

// getRecipe();


// -------------------------> Promises <-------------------------
// promise has one of the 3 three states
// i) Promise is pending
// ii) Promise is fullfilled(resolved) (.resolver() return value) if resovled so able to use .then()
// iii) Promise is rejected (.rejected() state that promise is rejectd) if rejected so able to use .catch() to show an error

// use new keyword with Promise() class to create the promise

// const getId = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve([123, 556, 948, 539]);
//         // reject([123,556,948,539]);
//     }, 1500);
//     // if above code is succesfully execute the resolve() method which return given value
// });

// const recipe = recId => {
//     return new Promise((resolve, reject) => {
//         setTimeout((ids) => {
//             const recipe_obj = { title: 'Fresh Aalupuri', chef: "Ujjwal Patel" }
//             resolve(`The new recipe id ${ids} and name is ${recipe_obj.title}`);
//         }, 1500, recId);
//     })
// };

// const chefS = chef => {
//     return new Promise((resolve, reject) => {
//         setTimeout((chfs) => {
//             const obj = { title: 'Frankie', chef: 'Mark Jonas' }
//             resolve(`New item is ${obj.title} and it's chef is ${chfs}`);
//         }, 2500, chef)
//     })
// };

// getId
//     .then((IDs) => {
//         console.log('getId named Promise is Execute');
//         console.log(IDs);
//         return recipe(IDs[1]);
//     })
//     .then((rec) => {
//         console.log("recipe named promise is Execute");
//         console.log(rec);
//         return chefS('Hiren')
//     })
//     .then((rest) => {
//         console.log(rest);
//     })
//     .catch((err) => {
//         console.error("Error!!!!!");
//     })


// -------------------------> Async & await <-------------------------

// async is alwasy return the promise and await is use when we want to execute particular line of code and unitl it's execution is not completed we not able to execute the next line of the code
// async function weather(){
//     let suratWeather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Surat Weather is 33deg");
//         },2000)       
//     });

//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Delhi weathr is 30deg");
//         },4000)
//     })
    
//     console.log("Surat Weather is Fetching!!!!!!");
//     let suratW = await suratWeather;
//     // unitl above code not execute compiler no execute the next line
//     console.log("Surat Weather is Fetched and now Delhi Weather is Fetching ");
//     let delhiW = await delhiWeather;
//     console.log("Both city Weahter is Fetched");

//     return [suratW,delhiW];
// }

// console.log("Weather Report !!!!!!!!!!!!!!!");
// weather();




