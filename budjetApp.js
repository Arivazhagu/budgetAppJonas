var globalBalance = 0;
var totalIncome = 0;
var totalExpenses = 0;
document.getElementById("currentMonth").textContent = "Available balance in " + getCurrentMonth();

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
function addNewAmounts() {
    var ddl = document.getElementsByTagName("select")[0];
    var selectedTExt = ddl.options[ddl.selectedIndex].text;
    return selectedTExt;
}
function getAmounts() {
    var amount = document.getElementById("amountEntered").value;
    return parseInt(amount);
}
function getDescription() {
    var amount = document.getElementById("descEntered").value;
    return amount;
}
function expensePercentage() {
    return ((totalExpenses / totalIncome) * 100).toFixed(2)+"%";
}
function updateBalances() {
    document.getElementById("globalBalance").textContent = globalBalance;
    document.getElementById("totalIncome").textContent = totalIncome;
    document.getElementById("totalExpenses").textContent = totalExpenses;
    document.getElementById("expensePercent").textContent = expensePercentage();
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function addNewElement(desc, inOrExp,amnt) {
    var el = document.createElement("div");
    el.innerHTML = desc + "<label style='float: right;'>" + amnt + " <label id='delete' style='float: right;display:none;color:red;'> (  X  ) </label> </label>";
    el.setAttribute("class", "addedElement");
    el.setAttribute("style", "transition: 0.8s;");
    el.onclick = function () {
        this.parentNode.removeChild(this);        
    };
    el.onmouseover = function () {
        console.log(this);
        this.getElementsByTagName("label")[1].style.display = "inline";
        this.getElementsByTagName("label")[1].onclick = function () {            
            var nodeText = this.parentNode.parentNode.parentNode.getElementsByTagName("div")[0].innerText;
            var labelAmount = parseInt(this.parentNode.innerText.substring(0, this.parentNode.innerText.indexOf("(")));
            if (nodeText ==="EXPENSES") {
                globalBalance += labelAmount;
                totalExpenses -= labelAmount;
            } else if (nodeText ==="INCOME") {
                globalBalance -= labelAmount;
                totalIncome -= labelAmount;
            }
            this.parentNode.removeChild(this);
            updateBalances();
        };       
    };
    el.onmouseout = function () {
        this.getElementsByTagName("label")[1].style.display = "none";
    }
    var div = document.getElementById(inOrExp);
    insertAfter(div, el);
}

document.getElementById("enterValue").addEventListener("click", function () {
    var amount = getAmounts();
    if (amount) {
        var desc = getDescription();
        var selectedType = addNewAmounts();
        if (selectedType === "+") {
            globalBalance += amount;
            totalIncome += amount;           
            addNewElement(desc, "incomeList",amount);
            
        } else {
            globalBalance -= amount;
            totalExpenses += amount;
            addNewElement(desc, "expenseList",amount);
        }
        updateBalances();
    } else {
        alert("Please enter the amount to add");
        return;
    }
    
});