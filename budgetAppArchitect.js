//Before starting the app we must define all the design parameters.
//All the moduleas to be defined
//Here we can have budgetController module, UI controller module, connectController which will act as a bridge for data and UI
//Each module must be defined in a IIFE, so parameters are encapsulated


var budgetController = (function () {
    function getCurrentMonth() {
        var d = new Date();
        var monthName = getMonthname((d.getMonth()) + 1);
        var year = d.getFullYear();

        return monthName + " " + year;

    }
    function getMonthname(mn) {
        switch (mn) {
            case 1:
                return "January";
            case 2:
                return "February";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                return "";
        }
    }

    return {
        publicgetcurrentmonth: getCurrentMonth        
    }

}());

var UIcontroller = (function () {
    //UI controller Code goes here

    return {
        getInputValues: function () {
            return "1";
        }
    };
})();

var connectorController = (function (budgetCtrl, UIctrl) {
    document.getElementById("currentMonth").textContent = "Available balance in " + budgetCtrl.publicgetcurrentmonth();
    var mainFunction = function () {
        console.log('inpt value click');
        //1. get input values

        //2. Calculate the budget

        //3. update the budget

        //4. update the UI- Create elements

        //5. Update UI- overall values
    }
    document.getElementById('enterValue').addEventListener('click', mainFunction);
    window.addEventListener("keypress", function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            mainFunction();
        }        
    });
    
})(budgetController, UIcontroller);
