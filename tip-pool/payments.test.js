describe('Payments test ', function(){
    beforeEach(function(){
        billAmtInput.value = '400';
        tipAmtInput.value = '50';
    });
    it('should receive payment info',function(){
        submitPaymentInfo();
        expect(allPayments[`payment${paymentId}`].billAmt).toEqual('400');
        expect(allPayments[`payment${paymentId}`].tipAmt).toEqual('50');
    });
    it('append payment info to table ',function(){
        submitPaymentInfo();
        expect(paymentTbody.children.length).toEqual(paymentId);
    });
    it('update summary table', function(){
        submitPaymentInfo();
        expect(summaryTds.length).toEqual(3);
    });
    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML ="";
        summaryTbody.innerHTML="";
        for(let i in summaryTds){
            summaryTds[i].innerHTML="";
        }
    });    
        
})