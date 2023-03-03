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
    var Expanse = function (id, description, amount, day, year, hr, min, sec, month, dat) {
        // this.timest = UIcontroller.displayTimeStamp()

        this.id = id;
        this.description = description;
        this.amount = amount;
        this.percentage = -1;
        this.day = day;
        this.month = month;
        this.dat = dat;
        this.year = year;
        this.hr = hr;
        this.min = min;
        this.sec = sec;
    }

    Expanse.prototype.calcPercentage = function (totalIncome) {
        if (data.total.inc > 0)
            this.percentage = Math.round((this.amount / totalIncome) * 100);
        else
            this.percentage = -1;
    }

    // Access the Percentage
    Expanse.prototype.getPercentage = function () {
        return this.percentage;
    }

    var Income = function (id, description, amount, day, year, hr, min, sec, month, dat) {
        // timest = UIcontroller.displayTimeStamp();

        this.id = id;
        this.description = description;
        this.amount = amount;
        this.day = day;
        this.month = month;
        this.dat = dat;
        this.year = year;
        this.hr = hr;
        this.min = min;
        this.sec = sec;
    }

    var calculateToatal = function (type) {
        var sum = 0;

        data.allItems[type].forEach(function (curr) {
            sum = sum + curr.amount;
        });

        data.total[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    function displayTimeStamp() {
        var date, month, year, dat, day, hour, min, sec;
        // create the date object

        date = new Date();

        const index = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        month = date.getMonth();
        year = date.getFullYear();
        dat = date.getDate();
        day = weekday[date.getDay()];
        hour = date.getHours();
        min = date.getMinutes();
        sec = date.getSeconds();


        return [day, index[month], dat, year, hour, min, sec]

    }

    return {
        addItems: function (type, desc, amount) {
            var newItem, ID;

            var timest = displayTimeStamp();
            day = timest[0];
            month = timest[1];
            dat = timest[2];
            year = timest[3];
            hr = timest[4];
            min = timest[5];
            sec = timest[6];

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
                // .id is help to retrive the element on the given index
            }
            else {
                ID = 0;
            }

            // create newItem basec on type inc and exp
            if (type === 'exp') {
                // create the instace of Expanses Constructor
                newItem = new Expanse(ID, desc, amount, day, year, hr, min, sec, month, dat);

            }
            else if (type === 'inc') {
                // cerate the instance of Income Constructor
                newItem = new Income(ID, desc, amount, day, year, hr, min, sec, month, dat);

            }
            // Push the value of ITEM as per it's type
            data.allItems[type].push(newItem);

            // return the newItem
            return newItem;

        },

        budgetCalculate: function () {

            // 1. Calculate the total income and expanse
            calculateToatal('exp')
            calculateToatal('inc')

            // 2. CalculateBudget = income - expanse
            data.budget = data.total.inc - data.total.exp;

            // 3. Calculate the percentage of income we spent
            if (data.total.inc > 0)
                data.percentage = Math.round((data.total.exp / data.total.inc) * 100);
            else
                data.percentage = -1;


        },

        getBudget: function () {
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalIncome: data.total.inc,
                totalExpanse: data.total.exp
            }
        },

        calculatePercentage: function () {
            data.allItems.exp.forEach(function (curr) {
                curr.calcPercentage(data.total.inc);
            });
        },

        getPercentage: function () {
            var allPerc = data.allItems.exp.map(function (index) {
                return index.getPercentage();
            })

            return allPerc;
        },

        deleteItem: function (type, id) {
            var ids, index

            ids = data.allItems[type].map(function (curr) {
                localStorage.removeItem(type + "_" + id);
                return curr.id;
            })
            // Map return the set of an array

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1)
            }

        },

        testing: function () {
            console.log(data)
        }
    }


})();








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
        incomeContainer: ".income__list",
        expanseContainer: ".expenses__list",
        budgetLable: ".budget__value",
        incomeLable: ".budget__income--value",
        expanseLable: ".budget__expenses--value",
        percentageLable: ".budget__expenses--percentage",
        container: ".container",
        expansePercentage: ".item__percentage",
        monthLable: ".budget__title--month",

    };

    var formatNumber = function (num, type) {
        var numsplit, int, dec, sing;

        num = Math.abs(num);
        num = num.toFixed(2);

        numsplit = num.split('.')

        int = numsplit[0];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }


        dec = numsplit[1];

        type === 'exp' ? sing = '-' : sing = '+';

        return sing + ' ' + int + '.' + dec;

    }


    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }

    }



    // Keyup event handler




    return {
        getInput: function () {
            return {
                type: document.querySelector(DOM_Strings.inputType).value, // for value +(inc) and for -(exp)
                description: document.querySelector(DOM_Strings.inputDesc).value,
                amount: parseFloat(document.querySelector(DOM_Strings.inputValue).value)
            };
        },
        storeData: function (obj, type) {

            var inc_obj, exp_obj;

            timest = this.displayTimeStamp();

            day = timest[0];
            month = timest[1];
            dat = timest[2];
            year = timest[3];
            hr = timest[4];
            min = timest[5];
            sec = timest[6];

            var store_cap = localStorage.length;

            if (store_cap === 0) {
                var store_obj = {
                    id: obj.id,
                    type: type,
                    description: obj.description,
                    amount: obj.amount,
                    day: obj.day,
                    month: obj.month,
                    dat: obj.dat,
                    year: obj.year,
                    hr: obj.hr,
                    min: obj.min,
                    sec: obj.sec


                }
                localStorage.setItem(type + "_" + obj.id, JSON.stringify(store_obj));
            }

            else {
                if (type === 'inc') {
                    for (let i = 0; i < store_cap; i++) {
                        if (localStorage.getItem("inc_" + i) !== null) {


                            // console.log(localStorage.getItem("inc_" + i));
                            inc_obj = localStorage.getItem("inc_" + i)
                            inc_obj = JSON.parse(inc_obj);
                            obj.id = inc_obj.id + 1;



                        } else {
                            inc_obj = localStorage.getItem("inc_" + 0);

                        }
                    }

                    // console.log(inc_obj);
                    // console.log(obj.id);
                    var store_obj = {
                        id: obj.id,
                        type: type,
                        description: obj.description,
                        amount: obj.amount,
                        day: obj.day,
                        month: obj.month,
                        dat: obj.dat,
                        year: obj.year,
                        hr: obj.hr,
                        min: obj.min,
                        sec: obj.sec

                    }
                    // console.log(obj_id);
                    localStorage.setItem(type + "_" + obj.id, JSON.stringify(store_obj));
                }
                else if (type === 'exp') {
                    for (let i = 0; i < store_cap; i++) {
                        if (localStorage.getItem("exp_" + i) !== null) {
                            console.log(localStorage.getItem("exp_" + i));
                            exp_obj = localStorage.getItem("exp_" + i);
                            exp_obj = JSON.parse(exp_obj);
                            obj.id = exp_obj.id + 1;
                        }
                        else {
                            exp_obj = localStorage.getItem("exp_" + 0)
                        }
                    }

                    // console.log(obj.id);
                    var store_obj = {
                        id: obj.id,
                        type: type,
                        description: obj.description,
                        amount: obj.amount,
                        day: obj.day,
                        month: obj.month,
                        dat: obj.dat,
                        year: obj.year,
                        hr: obj.hr,
                        min: obj.min,
                        sec: obj.sec

                    }
                    // console.log(obj_id);
                    localStorage.setItem(type + "_" + obj.id, JSON.stringify(store_obj));
                }


            }


            this.showOnUI(obj, type)
        },

        deleteListItem: function (selectorId) {
            var ele;

            ele = document.getElementById(selectorId);
            ele.parentNode.removeChild(ele);

        },

        showOnUI: function (obj, type) {
            var template, update_template, element, timest, day, month, dat, year, hr, min, sec;


            // timest = this.displayTimeStamp();

            // day = timest[0];
            // month = timest[1];
            // dat = timest[2];
            // year = timest[3];
            // hr = timest[4];
            // min = timest[5]
            // sec = timest[6];



            if (type === 'inc') {
                element = DOM_Strings.incomeContainer;
                template = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%desc%</div> <div class="item__time">%day% %month% %dat%, %year% %hr%:%min%:%sec%</div><div class="right clearfix"><div class="item__value">%amount%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                // obj.id = get_obj.id + 1;
            } else if (type === 'exp') {
                element = DOM_Strings.expanseContainer;
                template = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%desc%</div><div class="item__time">%day% %month% %dat%, %year% %hr%:%min%:%sec%</div><div class="right clearfix"><div class="item__value">%amount%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                // obj.id = exp_count.id + 1;
            }


            // replace the %placehodler% with actual value that we get from the object
            update_template = template.replace('%id%', obj.id)
            update_template = update_template.replace('%day%', obj.day)
            update_template = update_template.replace('%month%', obj.month)
            update_template = update_template.replace('%dat%', obj.dat)
            update_template = update_template.replace('%year%', obj.year)
            update_template = update_template.replace('%hr%', obj.hr)
            update_template = update_template.replace('%min%', obj.min)
            update_template = update_template.replace('%sec%', obj.sec)
            update_template = update_template.replace('%desc%', obj.description);
            update_template = update_template.replace('%amount%', formatNumber(obj.amount, type));




            // Update the Element on the UI
            document.querySelector(element).insertAdjacentHTML('beforeend', update_template);
        },

        // Input Fields Create Function execut after the value added
        clearFields: function () {
            var fields, fieldArr;

            // Select description and amount field

            fields = document.querySelectorAll(DOM_Strings.inputDesc + ', ' + DOM_Strings.inputValue);

            fieldArr = Array.prototype.slice.call(fields);

            // Use for-each loop to travarse it
            fieldArr.forEach(function (curr) {
                curr.value = "";
            });

            fieldArr[0].focus();


        },

        diplayBudget: function (obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp'

            document.querySelector(DOM_Strings.budgetLable).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOM_Strings.incomeLable).textContent = formatNumber(obj.totalIncome, 'inc');
            document.querySelector(DOM_Strings.expanseLable).textContent = formatNumber(obj.totalExpanse, 'exp');

            if (obj.percentage > 0) {
                document.querySelector(DOM_Strings.percentageLable).textContent = obj.percentage + "%";
            }
            else {
                document.querySelector(DOM_Strings.percentageLable).textContent = "---";

            }
        },

        displayPercentage: function (percentages) {
            var fields = document.querySelectorAll(DOM_Strings.expansePercentage);


            nodeListForEach(fields, function (curr, index) {
                if (percentages[index] > 0)
                    curr.textContent = percentages[index] + '%';
                else
                    curr.textContent = '---';

            });
        },

        displayTimeStamp: function () {
            var date, month, year, dat, day, hour, min, sec;
            // create the date object

            date = new Date();

            const index = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            month = date.getMonth();
            year = date.getFullYear();
            dat = date.getDate();
            day = weekday[date.getDay()];
            hour = date.getHours();
            min = date.getMinutes();
            sec = date.getSeconds();

            document.querySelector(DOM_Strings.monthLable).textContent = index[month] + ' ' + year;

            return [day, index[month], dat, year, hour, min, sec]

        },

        changeType: function () {
            var fiedls;

            fiedls = document.querySelectorAll(
                DOM_Strings.inputType + ',' +
                DOM_Strings.inputDesc + ',' +
                DOM_Strings.inputValue);

            nodeListForEach(fiedls, function (curr) {
                curr.classList.toggle('red-focus');
            });

            document.querySelector(DOM_Strings.add_btn).classList.toggle('red')


        },

        //    work like getter that work in OOPs
        getDomString: function () {
            return DOM_Strings;
        },

        debounce: function (callback, delay) {

            let timer;

            return function (...args) {
                if (timer) clearTimeout(timer);

                setTimeout(() => {
                    callback()
                }, delay);
            }

        },
        suggestion: function () {
            // console.log("Suggestion show with value " + up);

            let sugges = document.getElementsByClassName('item');
            let suggest = document.getElementsByClassName('item__description')
            let val = document.getElementById('inputBox').value;
            for (var i = 0; i < suggest.length; i++) {
                if (sugges[i].textContent.toUpperCase().indexOf(val.toUpperCase()) === -1) {
                    sugges[i].style.display = "none";
                }
                else {
                    // suggest[i].style.display='';
                    sugges[i].style.display = "";

                }

            }
        }


    };
})();








var Controller = (function (budgetCtrl, UICtrl) {
    //   Main Controller Code which connect the DATA and UI Controller

    // Event Handler code here
    // Set up the eventlistner in one function which execute only when the our applicaiton is started

    var setupEvnetnListnere = function () {
        // Fetch the value of Class name for getDomeString
        var DOM_class = UICtrl.getDomString();

        // Use the Event Listner here for click
        var click_btn = document.querySelector(DOM_class.add_btn);
        click_btn.addEventListener("click", insertItem);


        var Enter_key_press = document.addEventListener("keypress", function (event) {
            // To identify the Enter key we use the keycode and to use the key we need to pass and event as an argument in eventlistener function

            // console.log(event);

            if (event.key === "Enter") {
                insertItem();
            }
        });
        document.querySelector(DOM_class.container).addEventListener('click', deleteItem)

        document.querySelector(DOM_class.inputType).addEventListener('change', UICtrl.changeType);
    };

    // Function that Update the budget
    var updateBudget = function () {
        // 5. Calculate the budget
        budgetCtrl.budgetCalculate();

        // 6. Return the budget
        var answers = budgetCtrl.getBudget();

        // console.log(answer);

        // 7. Display the Budget on th UI
        UICtrl.diplayBudget(answers);
    }

    // Function update Percentage
    var updatePercentage = function () {
        // 1. Calculate the Percentage
        budgetCtrl.calculatePercentage();

        // 2. Read percentage from the budget Controller
        var percen = budgetCtrl.getPercentage();
        // 3. Update percentage in UI
        // console.log(percen);
        UICtrl.displayPercentage(percen);
    }

    var insertItem = function () {
        var input, newItem;
        // 1. Get the value of field of input data
        input = UICtrl.getInput();
        // console.log(input);


        if (input.description !== "" && !isNaN(input.amount) && input.amount !== 0) {


            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItems(input.type, input.description, input.amount)
            // console.log((newItem));

            // 3. Add the item to the UI
            UICtrl.storeData(newItem, input.type);

            // 4. Clear the input Fields
            UICtrl.clearFields();

            // 5. updateBudget
            updateBudget();

            // 6. updateBudget
            updatePercentage()
        }

    };

    var deleteItem = function (event) {
        var itemId, newitemId, type, id;

        itemId = event.target.parentNode.parentNode.parentNode.parentNode.id

        if (itemId) {
            newitemId = itemId.split('-')

            // console.log(newitemId);
            type = newitemId[0];
            id = parseInt(newitemId[1]);

            // For Deltetion

            // 1. Delete the item from data structure
            budgetCtrl.deleteItem(type, id);
            // 2. Delete the item from UI
            UICtrl.deleteListItem(itemId);

            // 3. Recalculate the budget and Update it to UI
            updateBudget();

            // 4. Update Percentage
            updatePercentage();

        }

    };

   
    // return object which make our applicaiton start
    return {
        init: function () {
            console.log("Application is started");
            UICtrl.displayTimeStamp();


            if (localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    if (localStorage.getItem("inc_" + i) !== null) {
                        var temp_obj = localStorage.getItem("inc_" + i)
                        temp_obj = JSON.parse(temp_obj);
                        budgetCtrl.addItems(temp_obj.type, temp_obj.description, temp_obj.amount);
                        // var temp_item = {
                        //     type: temp_obj.type,
                        //     description: temp_obj.description,
                        //     amount: temp_obj.amount,
                        //     day: temp_obj.day
                        // }
                        // console.log(temp_obj);
                        // console.log(temp_item);
                        UICtrl.showOnUI(temp_obj, temp_obj.type)
                        // day = timest[0];
                        // month = timest[1];
                        // dat = timest[2];
                        // year = timest[3];
                        // hr = timest[4];
                        // min = timest[5]
                        // sec = timest[6];

                    }
                    if (localStorage.getItem("exp_" + i) !== null) {
                        var temp_obj = localStorage.getItem("exp_" + i)
                        temp_obj = JSON.parse(temp_obj);
                        budgetCtrl.addItems(temp_obj.type, temp_obj.description, temp_obj.amount);
                        UICtrl.showOnUI(temp_obj, temp_obj.type)

                    }
                }
            }

            // initally all the values are 0
            UICtrl.diplayBudget({
                budget: 0,
                percentage: 0,
                totalIncome: 0,
                totalExpanse: 0
            })
            setupEvnetnListnere();
            updateBudget()
            updatePercentage();
        },
        call: UICtrl.debounce(UICtrl.suggestion, 300)
    }
})(budgetController, UIcontroller);


// call the init() function outside
Controller.init();
