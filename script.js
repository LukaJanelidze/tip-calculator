const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipButtons = Array.from(document.querySelectorAll(".tips button"));
const customInput = document.getElementById("custom");
const tipResult = document.getElementById("tip-result");
const totalResult = document.getElementById("total-result");
const error = document.getElementById("error");
const peopleContainer = document.getElementById("people-container");
const resetButton = document.getElementById("reset-button");

let billValue = 0;
let peopleValue = 0;
let percent = 0;

let tipAmount = 0;
let total = 0;

tipButtons.map( (button) => {
    button.addEventListener("click", (event) => {
        percent = event.target.innerText;
        calculation();
    });
});

billInput.addEventListener("input", (event) => {
    if(!event.target.value) {
        billValue = 0;
    } else {
        billValue = parseFloat(event.target.value);
    };
 
    calculation();
});

tipButtons.map((button) => {
    button.addEventListener("click", (event) => {
        percent = parseFloat(event.target.innerText);
        calculation();
    });
});

customInput.addEventListener("input", (event) => {
        percent = parseInt(event.target.value);
    calculation();
});

peopleInput.addEventListener("input", (event) => {
    peopleValue = parseInt(event.target.value);

    if(event.target.value.startsWith("0")) {
        error.style.display = "block";
        peopleInput.style.border = "2px solid #E17052";
    } else {
        error.style.display = "none";
        peopleInput.style.border = "none";
    }
    calculation();
});

function calculation () {

    if(!peopleValue || !percent) {
        tipResult.innerText = "$0.00";
        totalResult.innerText = "$0.00";
    } else {
        tipAmount = billValue * (percent / 100) / peopleValue;
        total = billValue / peopleValue + tipAmount;
    
        tipResult.innerText = `$${tipAmount.toFixed(2)}`;
        totalResult.innerText = `$${total.toFixed(2)}`;
    };
};

resetButton.addEventListener("click", (event) => {
    billValue = 0;
    peopleValue = 0;
    percent = 0;
    tipAmount = 0;
    total = 0;

    billInput.value = "";
    peopleInput.value = "";
    customInput.value = "";
    
    tipResult.innerText = "$0.00";
    totalResult.innerText = "$0.00";
});