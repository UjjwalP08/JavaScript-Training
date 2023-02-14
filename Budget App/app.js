/*****************************************************************************
 * Structuring code with MODULES
 * MODULES ARE:
 * -Important aspect of any robust application's architecture;
 * -Keep the units of code for a project both cleanly separated and organized;
 * -Encapsulate some data into privacy and expose other data publicly.
 *
 * Separate the to-do-list into modules where all the peices of code are related to one another; for example is it for the UI is it data separate them into their own modules
 ****************************************************************************/

/****************************************************************************
 * BUDGETY TO-DO LIST #1
 * Add event handler
 * Get input values
 * Add the new item to our data structure
 * Add the new item to the UI
 * Calculate the budget
 * Update the UI
 *
 * MODULES FOR THESE TASKS
 * UI MODULE
 * -Get iput values
 * -Add the new item to the UI
 * -update the UI
 *
 * DATA MODULE
 * -Add the new item to our data structure
 * -Calculate budget
 *
 * CONTROLLER MODULE
 * -Add event handler
 ****************************************************************************/

// Create the Data Module with use the IIFE and Closure
var budgetController = (function () {
    //   Budget Controller Code

    // Adding the constructor for the Income and Expanse 
    var Expanse = function(id,description,value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var Income = function(id,description,value)
    {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    // To store the exapnses and income of all the entry we enter we need one data structre to store all entred income and expanses
    // we use variable but it make too much complex our project to understan our project so,
    // we use object which store all the value of data
    // use an array to store the all the income and expanses

    var data = {
         allItems:{
            exp:[],
            inco:[]
        },
        total:{
            exp:0,
            inco:0
        }
    }


})();
// Here we use IIFE function to create the module so the all the method and variable in side the budgetController is private which is not able to access outside the IIFE function but here we use the one closure which is able to access outside the IIFE

// budgetController.TestMethod(7);

// Create the UI Module with use the IIFE and Closure

var UIcontroller = (function () {
    //   UI Controller Code

    // All the class of UI is here
    // Dom_Steings is private object to access out side the scope we need the getter
    var DOM_Strings = {
        inputType: ".add__type",
        inputDesc: ".add__description",
        inputValue: ".add__value",
        add_btn: ".add__btn",
    };

    // Here we need to return the value of the inputs
    // to rather than return the 3 input fields value we use the one object to return the value of the 3 input fields
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOM_Strings.inputType).value, // for value +(inc) and for -(exp)
                description: document.querySelector(DOM_Strings.inputDesc).value,
                amount: document.querySelector(DOM_Strings.inputValue).value,
                // if the class name of the field is change we need to change is as many time we use in the places we use so , if the class name is chagne we create and object here which store the name of all the classes we use so if any change happen we need to change on the object value
            };
        },
        //    work as getter that work in OOPs
        getDomString: function () {
            return DOM_Strings;
        },
    };
})();

// Create the Controller Module with use the IIFE and Closure that is help to connect the UI and Data Module to connect with each other
// To connect both module we pass both module as an arguments to IIFE

// we pass as budgetCtrl name beacause if the budgetController Name change we need to change all the time we use inside the Controller module and if we pass argument as  the budgetCtrl name and the  function name is change so we need to only change the name at the end of IIFE where we call the Module which make lot easier in the code

var Controller = (function (budgetCtrl, UICtrl) {
    //   Main Controller Code which connect the DATA and UI Controller

    // Event Handler code here

    // We need to perfom same event on the click_btn and Enter_key_press
    // so if we write the both code in the same function it's not follow the DRY Principle so to follow the DRY(Do not Repeat Your code ) we use the one function or function expression and wrap the code inside it

    var addItem = function () {
        // 1. Get the value of field of input data
        var get_input_value = UICtrl.getInput();
        console.log(get_input_value);
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the Budget on th UI

        // to check wether function is working or not
        // console.log("Event Fire");
    };
    // Set up the eventlistner in one function which execute only when the our applicaiton is started

    var setupEvnetnListnere = function () {
        // Fetch the value of Class name for getDomeString
        var DOM_class = UICtrl.getDomString();

        // Use the Event Listner here for click
        var click_btn = document.querySelector(DOM_class.add_btn);
        click_btn.addEventListener("click", addItem);

        // We need the Enter Key event listner also because when we get the value form the user press the Enter Key at that time also we need to store the value

        var Enter_key_press = document.addEventListener("keypress",function (event) 
        {
                // keypress event is execute when any key press on the keyboard
                // To identify the Enter key we use the keycode and to use the key we need to pass and event as an argument in eventlistener function

                // console.log(event);

                if (event.key === "Enter") {
                    addItem();
                }
        });
    };

    // return object which make our applicaiton start
    return {
        init:function()
        {
            console.log("Application is started");
            setupEvnetnListnere();
        }
    }
})(budgetController, UIcontroller);

// call the init() function outside
Controller.init();