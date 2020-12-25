

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

function setupIntialValues() {
  let inputs = getCurrentUIValues();
  let result = calculateMonthlyPayment(inputs);
  updateMonthly(result);
}

function update() {
  let userInput = getCurrentUIValues();
  let result = calculateMonthlyPayment(userInput);
  updateMonthly(result);
}

function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let interestM = (values.rate)/12;
  let nums = (values.years)*12;

  let result = ((principle * interestM)/(1-(1+interestM)**-nums)).toFixed(2);
  return result;
}

function updateMonthly(monthly) {
  let board = document.getElementById('monthly-payment');
  if(isNaN(monthly)){
    board.innerHTML = `<div>$ </div>`
  }else{
    board.innerHTML = `<div>$ ${monthly}</div>`
  }
}
