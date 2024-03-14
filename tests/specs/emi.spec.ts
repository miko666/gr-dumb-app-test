import { emiPage } from '../../pages/components/emi.page';
import { navComponent } from '../../pages/components/navigation.component';
import { historyPage } from '../../pages/components/history.page';

import {
  generateRandomAmount,
  generateRandomInterest,
  generateRandomYears,
  generateRandomMonths,
  generateRandomFee,
  calculateEMI,
  calculateTotalInterestAndPayment,
} from '../helpers/helper';

describe('Goodrequest task', () => {
  before(async () => {});
  const amount = generateRandomAmount();
  const interest = generateRandomInterest();
  const years = generateRandomYears();
  const months = generateRandomMonths();
  const fee = generateRandomFee();
  const { processingFeeEMI } = calculateEMI(amount, interest, years, months, fee);
  const { emi } = calculateEMI(amount, interest, years, months, fee);
  const { totalPayment } = calculateTotalInterestAndPayment(amount, years, months, emi, fee);
  const { totalInterest } = calculateTotalInterestAndPayment(amount, years, months, emi, fee);

  it('should load main section', async () => {
    await $('android=resourceId("com.continuum.emi.calculator:id/btnStart")').waitForDisplayed({
      timeout: 10000,
    });
  });

  it('should check emi button text', async () => {
    const emiButtonText = await navComponent.emiBtnText.getText();
    await expect(emiButtonText).toEqual('EMI Calculator');
  });

  it('should open EMI section', async () => {
    await navComponent.menuBtn.click();
  });

  it('should enter values', async () => {
    await emiPage.loanInput.click();
    await emiPage.loanInput.setValue(amount);
    await emiPage.interestInput.click();
    await emiPage.interestInput.setValue(interest);
    await emiPage.yearsInput.click();
    await emiPage.yearsInput.setValue(years);
    await emiPage.monthsInput.click();
    await emiPage.monthsInput.setValue(months);
    await emiPage.processingFeeInput.click();
    await emiPage.processingFeeInput.setValue(fee);
    await emiPage.calculateButton.click();
  });

  it('should click calculate btn', async () => {
    await emiPage.calculateButton.click();
  });

  it('should return correct values EMI', async () => {
    const emiString: string = emi.toString();
    const emiFromInput = await emiPage.emiInput.getText();
    const emiFromTable = (await emiPage.emiResult.getText()).replace(/,/g, '');
    await expect(emiFromTable).toEqual(emiFromInput);
    await expect(emiString).toEqual(emiFromInput);
  });

  it('should return correct Fee value', async () => {
    const feeString: string = processingFeeEMI.toString();
    const feeFromTable = (await emiPage.processingFeeResult.getText()).replace(/,/g, '');
    await expect(feeString).toEqual(feeFromTable);
  });

  it('should return correct Total interest value', async () => {
    const totalInterestString: string = totalInterest.toString();
    const totalIntFromTable = (await emiPage.totalInterestResult.getText()).replace(/,/g, '');
    await expect(totalInterestString).toEqual(totalIntFromTable);
  });

  it('should return correct Total payment value', async () => {
    const totalPaymentString: string = totalPayment.toString();
    const totalPayFromTable = (await emiPage.totalPaymentResult.getText()).replace(/,/g, '');
    await expect(totalPaymentString).toEqual(totalPayFromTable);
  });

  it('should open EMI history', async () => {
    await navComponent.hamburgerBtn.click();
    await navComponent.historyBtn.click();
  });

  it('should open last history record', async () => {
    await navComponent.lastRecord.click();
  });

  it('should check entered data with table', async () => {
    const getAmount = (await historyPage.historyLoanAmount.getText()).replace(/,/g, '');
    await expect(getAmount).toEqual(amount.toString());

    const getInterest = (await historyPage.historyInterest.getText()).replace(/,/g, '');
    await expect(getInterest).toEqual(interest.toString());

    const getPeriod = (await historyPage.historyPeriod.getText()).replace(/,/g, '');
    await expect(getPeriod).toEqual((years * 12 + months).toString());

    const getEmi = (await historyPage.historyEmi.getText()).replace(/,/g, '');
    await expect(getEmi).toEqual(emi.toString());

    const getTotalInt = (await historyPage.historyTotalInt.getText()).replace(/,/g, '');
    await expect(getTotalInt).toEqual(totalInterest.toString());

    const getProcFee = (await historyPage.historyProcessingFee.getText()).replace(/,/g, '');
    await expect(getProcFee).toEqual(processingFeeEMI.toString());

    const getTotalPay = (await historyPage.historyTotalPay.getText()).replace(/,/g, '');
    await expect(getTotalPay).toEqual(totalPayment.toString());

    await new Promise((resolve) => setTimeout(resolve, 15000));
  });

  it('should check monthly calculate history', async () => {
    for (let i = 1; i < 4; i++) {
      let principalString = await (await historyPage.pickFromTable(i, 2)).getText();
      let interestString = await (await historyPage.pickFromTable(i, 3)).getText();
      let balanceString = await (
        await (await historyPage.pickFromTable(i, 4)).getText()
      ).replace(/,/g, '');
      let principalNumber = parseFloat(principalString);
      let interestNumber = parseFloat(interestString);
      let balanceNumber = parseFloat(balanceString);

      await expect(principalNumber + interestNumber).toEqual(emi); // first principal + interest
      await expect(balanceNumber).toEqual(totalPayment);
    }
  });
});
