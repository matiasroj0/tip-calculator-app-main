const tipBtn_5 = document.querySelector(".btn-5");
const tipBtn_10 = document.querySelector(".btn-10");
const tipBtn_15 = document.querySelector(".btn-15");
const tipBtn_25 = document.querySelector(".btn-25");
const tipBtn_50 = document.querySelector(".btn-50");
const tipCustom = document.querySelector(".custom-input");

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");

const tipAmountPerson = document.querySelector(".tip-amount-person");
const tipTotalPerson = document.querySelector(".total-person");

const resetBtn = document.querySelector(".reset-btn");

const peopleError = document.querySelector(".people-error-text");
const billError = document.querySelector(".bill-error-text");

tipBtn_5.addEventListener("click", ()=>{
    checkPeople();
    checkBill();
    if (checkPeople() == true && checkBill() == true) {
        calculateTip(0.05)
    }
})

tipBtn_10.addEventListener("click", ()=>{
    checkPeople();
    checkBill();
    if (checkPeople() == true && checkBill() == true) {
        calculateTip(0.10)
    }
})

tipBtn_15.addEventListener("click", ()=>{
    checkPeople();
    checkBill();
    if (checkPeople() == true && checkBill() == true) {
        calculateTip(0.15)
    }
})

tipBtn_25.addEventListener("click", ()=>{
    checkPeople();
    checkBill();
    if (checkPeople() == true && checkBill() == true) {
        calculateTip(0.25)
    }
})

tipBtn_50.addEventListener("click", ()=>{
    checkPeople();
    checkBill();
    if (checkPeople() == true && checkBill() == true) {
        calculateTip(0.50);
    }
})

tipCustom.addEventListener("keypress", (event)=>{
    if(event.key === "Enter") {
        event.preventDefault();
        checkPeople();
        checkBill();
        if (checkPeople() == true && checkBill() == true) {
            let customTipValue = tipCustom.value * 0.01;
            calculateTip(customTipValue);
        }
    }
})

function calculateTip(percent) {
    let bill = billInput.value;
    let numberOfPeople = peopleInput.value;

    let totalTipPerson = bill*percent/numberOfPeople;
    let totalTip = totalTipPerson + bill / numberOfPeople;

    let totalTipPersonRounded = (Math.round(totalTipPerson * 100) / 100).toFixed(2);
    let totalTipRounded = (Math.round(totalTip * 100) / 100).toFixed(2);

    tipAmountPerson.innerHTML = "$"+totalTipPersonRounded;
    tipTotalPerson.innerHTML = "$"+totalTipRounded;
}

function checkPeople() {
    if(peopleInput.value == 0) {
        peopleError.classList.remove("hidden");
        peopleInput.classList.add("error-input");
        return false
    } else {
        peopleError.classList.add("hidden");
        peopleInput.classList.remove("error-input");
        return true
    }
}

function checkBill() {
    if(billInput.value == 0) {
        billError.classList.remove("hidden");
        billInput.classList.add("error-input");
        return false
    } else {
        billError.classList.add("hidden");
        billInput.classList.remove("error-input");
        return true
    }
}

resetBtn.addEventListener("click", ()=> {
    billInput.value = "";
    peopleInput.value = "";
    tipAmountPerson.innerHTML = "$0.00";
    tipTotalPerson.innerHTML = "$0.00";
})




