// let old_name = "Ujjwal";
console.log("Basics of Javascript");
// let new_name = prompt("Enter you name");

// if(old_name != new_name)
// {
//     alert("Your New name is "+new_name);
// }
// else{
//     alert("You name is same as you old name");
// }

// ------------- Coding Challange 1 -------------
// var mark_weight = 45;
// var john_weight = 55;

// var mark_height = 6;
// var john_height = 5.10;

// var mark_bmi = mark_weight/(mark_height*mark_height);

// var john_bmi = john_weight/(john_height*john_height);

// var answer =  mark_bmi>john_bmi;

// console.log("Is Mark's BMI is higher than Johns? "+ answer );

// ------------- Coding Challange 2 -------------

// var john_team_avg = (89 + 120 + 103) / 3;

// var mike_team_avg = (116 + 94 + 23) / 3;

// var mary_team_avg = (97 + 134 + 105) / 3;

// if (john_team_avg > mike_team_avg && john_team_avg>mary_team_avg) {
//   console.log("John's team is win with the avg score " + john_team_avg);
// }
// else if (john_team_avg == mike_team_avg && mike_team_avg == mary_team_avg && john_team_avg == mary_team_avg) {
//   console.log("It's a Draw");
// }
// else if(john_team_avg > mike_team_avg && john_team_avg<mary_team_avg)
// {
//   console.log("Mary's team is win with the avg score " + mary_team_avg);

// }
// else if(john_team_avg < mike_team_avg && mike_team_avg<mary_team_avg)
// {
//   console.log("Mary's team is win with the avg score " + mary_team_avg);

// }
// else if(john_team_avg < mike_team_avg && mike_team_avg > mary_team_avg)
// {
//   console.log("Mary's team is win with the avg score " + john_team_avg);

// }

//  else {
//   console.log("Mike's team is win with the avg score " + mike_team_avg);
// }

// ------------- Coding Challange 3 -------------

// John and his family went on a holiday
// different restaurants. The bills were
// $268.
// To tip the waiter a fair amount, John
// simple tip calculator (as a function) .
// and went to 3
// $124, $48 and
// created a
// He likes to
// tip 20% of the bill when the bill is less than $50,
// 15% when the bill is between $50 and $200, and 10%
// if the bill is more than $200.
// In the end, John would tike to have 2 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bilt +
// tip).
// (NOTE: To calculate 20% of a value, simply multiply
// if with 20/100 = 0 2)

// var tip = [];
// var bill = [];

// function tipcalc(amount)
// {
//     switch(true)
//     {
//         case amount < 50:
//             return 0.2*amount ;
//         case amount >= 50 && amount <= 200:
//             return 0.15*amount;
//         case amount > 200:
//             return 0.10*amount;

//     }
// }

// function final_bill(amount)
// {
//     return tipcalc(amount)+amount;
// }

// tip[tip.length] = tipcalc(124);
// tip[tip.length] = tipcalc(48);
// tip[tip.length] = tipcalc(268);

// bill[bill.length] = final_bill(124)
// bill[bill.length] = final_bill(48)
// bill[bill.length] = final_bill(268)

// console.log(tip);

// console.log(bill);

// ------------- Coding Challange 4 -------------

// Let's remember the first coding challenge where Mark
// and John compared their BMIs. Let's now implement
// the same functionality with objects and methods.
// 1. For each of them, create an object with
// properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate
// the BMI. Save the BMI to the object and also return
// it from the method.
// 3. In the end, log to the console who has the
// highest BMI, together with the futt name and the
// respective BMI.
// same BMI.
// Remember :
// height) •
// BMI
// (mass
// Don't forget they might have the
// = mass / heightA2
// = mass / (height *
// in kg and height in meter).

// var john = {
//     weight:69,
//     height:6,
//     calc_bmi:function()
//     {
//         this.BMI = this.weight/(this.height*this.height);
//         return this.BMI
//     }
// }

// var mike = {
//     weight:80,
//     height:6.4,
//     calc_bmi:function()
//     {
//         this.BMI = this.weight/(this.height*this.height);
//         return this.BMI

//     }
// }

// john.calc_bmi();
// mike.calc_bmi();
// console.log(john);
// console.log(mike);

// if(john.BMI > mike.BMI)
// {
//     console.log("John's BMI is Higher");
// }
// else
// {
//     console.log("Mike's BMI is Higher");

// }

// ------------- Coding Challange 5 -------------

var bill = [124, 48, 268, 180, 42];

function tipcalc(amount) {
  switch (true) {
    case amount < 50:
      return 0.2 * amount;
    case amount >= 50 && amount <= 200:
      return 0.15 * amount;
    case amount > 200:
      return 0.1 * amount;
  }
}

function final_bill(amount) {
  return tipcalc(amount) + amount;
}

// John's Family object
var john_family = {
  bill: [124, 48, 268, 180, 42],
  payment: [],
  tip: [],
  tipcalc: function () {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 50) {
        this.tip[i] = 0.2 * this.bill[i];
        // console.log(this.bill[i]);
      } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
        this.tip[i] = 0.15 * this.bill[i];
        // console.log(this.bill[i]);
      } else {
        this.tip[i] = 0.1 * this.bill[i];
        // console.log(this.bill[i]);
      }
    }
  },
  final_bill: function () {
    for (var i = 0; i < this.bill.length; i++) {
      this.payment[i] = this.tip[i] + this.bill[i];
    }
  },
};

var mark_family = {
  bill: [77, 475, 110, 45],
  tip: [],
  payment: [],
  tipcalc: function () {
    for (var i = 0; i < this.bill.length; i++) {
      if (this.bill[i] < 100) {
        this.tip[i] = 0.2 * this.bill[i];
        // console.log(this.bill[i]);
      } else if (this.bill[i] >= 100 && this.bill[i] <= 300) {
        this.tip[i] = 0.1 * this.bill[i];
        // console.log(this.bill[i]);
      } else {
        this.tip[i] = 0.25 * this.bill[i];
        // console.log(this.bill[i]);
      }
    }
  },
  final_bill: function () {
    for (var i = 0; i < this.bill.length; i++) {
      this.payment[i] = this.tip[i] + this.bill[i];
    }
  },
};

john_family.tipcalc();
john_family.final_bill();


mark_family.tipcalc();
mark_family.final_bill();

// Find the Avg of tips
function avg_tip(obj)
{
    var sum = 0;
    
    for(var i = 0;i<obj.length;i++)
    {
        sum = sum + obj[i];
    }

    return sum/obj.length;
}

// John Family
console.log("John Family Bills");
console.log(john_family.bill);
console.log("John Family paid Tips ");
console.log(john_family.tip);
console.log("John Family Tips Avg");
var john_family_avg = avg_tip(john_family.tip);
console.log(john_family_avg);
console.log("John Family Final Payments");
console.log(john_family.payment);

// Mark Family
console.log("Mark Family Bills");
console.log(mark_family.bill);
console.log("Mark Family paid Tips ");
console.log(mark_family.tip);
console.log("Mark Family Tips Avg");
var mark_family_avg = avg_tip(mark_family.tip);
console.log(mark_family_avg);
console.log("Mark Family Final Payments");
console.log(mark_family.payment);

if(mark_family_avg>john_family_avg)
    console.log("Mark Family paid hightest tips "+mark_family_avg);
else if(mark_family_avg === john_family_avg)
    console.log("Both Family paid same tips "+mark_family_avg);
else
    console.log("John Family paid hightset tips "+john_family_avg);
