

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let inputs = getCurrentUIValues();
  let result = calculateMonthlyPayment(inputs);
  updateMonthly(result);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let userInput = getCurrentUIValues();
  let result = calculateMonthlyPayment(userInput);
  updateMonthly(result);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let interestM = (values.rate)/12;
  let nums = (values.years)*12;

  let result = ((principle * interestM)/(1-(1+interestM)**-nums)).toFixed(2);
  return result;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let board = document.getElementById('monthly-payment');
  if(isNaN(monthly)){
    board.innerHTML = `<div>$ </div>`
  }else{
    board.innerHTML = `<div>$ ${monthly}</div>`
  }
}
