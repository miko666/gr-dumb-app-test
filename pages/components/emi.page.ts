export class EmiPage {
  get menuBtn() {
    return $('android=resourceId("com.continuum.emi.calculator:id/btnStart")');
  }

  get emiBtnText() {
    return $('//android.widget.TextView[@text="EMI Calculator"]');
  }

  get loanInput() {
    return $('android=resourceId("com.continuum.emi.calculator:id/etLoanAmount")');
  }

  get interestInput() {
    return $('android=resourceId("com.continuum.emi.calculator:id/etInterest")');
  }

  get yearsInput() {
    return $('android=resourceId("com.continuum.emi.calculator:id/etYears")');
  }

  get monthsInput() {
    return $('android=resourceId("com.continuum.emi.calculator:id/etMonths")');
  }

  get emiInput() {
    return $('android=resourceId("com.continuum.emi.calculator:id/etEMI")');
  }

  get processingFeeInput() {
    return $('android=resourceId("com.continuum.emi.calculator:id/etFee")');
  }

  get calculateButton() {
    return $('android=resourceId("com.continuum.emi.calculator:id/btnCalculate")');
  }

  //tabulka vysledkov
  get emiResult() {
    return $('android=resourceId("com.continuum.emi.calculator:id/monthly_emi_result")');
  }

  get totalInterestResult() {
    return $('android=resourceId("com.continuum.emi.calculator:id/total_interest_result")');
  }

  get processingFeeResult() {
    return $('android=resourceId("com.continuum.emi.calculator:id/processing_fee_result")');
  }

  get totalPaymentResult() {
    return $('android=resourceId("com.continuum.emi.calculator:id/total_payment_result")');
  }
}

export const emiPage = new EmiPage();
