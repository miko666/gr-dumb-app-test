export class HistoryPage {
  get historyLoanAmount() {
    return $('android=resourceId("com.continuum.emi.calculator:id/loan_amount_result")');
  }

  get historyInterest() {
    return $('android=resourceId("com.continuum.emi.calculator:id/interest_result")');
  }

  get historyPeriod() {
    return $('android=resourceId("com.continuum.emi.calculator:id/period_result")');
  }

  get historyEmi() {
    return $('android=resourceId("com.continuum.emi.calculator:id/monthly_emi_result")');
  }

  get historyTotalInt() {
    return $('android=resourceId("com.continuum.emi.calculator:id/total_interest_result")');
  }

  get historyProcessingFee() {
    return $('android=resourceId("com.continuum.emi.calculator:id/processing_fee_result")');
  }

  get historyTotalPay() {
    return $('android=resourceId("com.continuum.emi.calculator:id/total_payment_result")');
  }

  async pickFromTable(mesiac: number, stlpec: number) {
    const indexOne = mesiac;
    const indexTwo = stlpec;

    const element = $(
      `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.ListView/android.widget.LinearLayout[${indexOne}]/android.widget.TextView[${indexTwo}]`,
    );
    return element;
  }
}

export const historyPage = new HistoryPage();
