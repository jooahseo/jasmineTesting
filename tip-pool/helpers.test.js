describe('Helpers test ', function(){
    beforeEach(function(){
        billAmtInput.value = '100';
        tipAmtInput.value = '20';
    });
    it('should return the sum of the payment', function(){
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    });
    it('should calculate tip percent', function(){
        expect(calculateTipPercent(100,20)).toEqual(20);
    });
    it('should append td to table row Bill amt, Tip amt, Tip percentage', function(){
        submitPaymentInfo();
        expect(paymentTbody.firstElementChild.children[0].innerText).toEqual('$100');
        expect(paymentTbody.firstElementChild.children[1].innerText).toEqual('$20');
        expect(paymentTbody.firstElementChild.children[2].innerText).toEqual('20%');
    });
    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML ="";
        summaryTbody.innerHTML="";
    });
});

