
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount:10000,years:3,rate:0.04})).toEqual('295.24');
});


it("should return a result with 2 decimal places", function() {
  function numDecimal(num){
    if(typeof(num)===String){
      return num.split('.')[1].length;
    }
    return num.toString().split('.')[1].length;
  }
  expect(numDecimal(calculateMonthlyPayment({amount:10000,years:3,rate:0.04}))).toEqual(2);
});

/// etc
