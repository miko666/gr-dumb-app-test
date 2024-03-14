//import { getFirstName, getLastName, getIban } from '../../data/contacts.data';

export function generateRandomAmount(): number {
  // generuje od 500 do 100000
  return Math.floor(Math.random() * (100000 - 500 + 1) + 500);
}

export function generateRandomInterest(): number {
  // generuje od 0,50 do 10.00
  return parseFloat((Math.random() * (10.0 - 0.5) + 0.5).toFixed(2));
}

export function generateRandomYears(): number {
  // generuje od 1 do 30
  return Math.floor(Math.random() * 30) + 1;
}

export function generateRandomMonths(): number {
  // generuje od 0 do 11
  return Math.floor(Math.random() * 12);
}

export function generateRandomFee(): number {
  return Math.floor(Math.random() * 5) + 1;
}

export function calculateTotalInterestAndPayment(
  amount: number,
  years: number,
  months: number,
  emi: number,
  processingFeePercentage: number,
): { totalInterest: number; totalPayment: number } {
  const totalMonths: number = years * 12 + months;
  const totalInterest: number = parseFloat((emi * totalMonths - amount).toFixed(2));
  const processingFee: number = (processingFeePercentage / 100) * amount;
  const totalPayment: number = parseFloat((amount + totalInterest + processingFee).toFixed(2));

  return { totalInterest, totalPayment };
}

export function calculateEMI(
  loanAmount: number,
  annualInterestRate: number,
  loanYears: number,
  loanMonths: number,
  processingFee: number,
): { emi: number; processingFeeEMI: number } {
  // celk. pocet mesiacov
  const totalMonths: number = loanYears * 12 + loanMonths;

  // uroky a pocet mesiacov
  const monthlyInterestRate: number = annualInterestRate / (12 * 100);
  const numberOfPayments: number = totalMonths;

  // emi
  const emi: number =
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  // poplatok
  const processingFeeEMI: number = (loanAmount / 100) * processingFee;

  //  funkcia na zachovanie dvoch desatinnych miest kedze javascript a typescript su v tomto biedne
  const keepTwoDecimals = (num: number): number => {
    const strNum = num.toString();
    const decimalIndex = strNum.indexOf('.');
    if (decimalIndex !== -1) {
      return parseFloat(strNum.slice(0, decimalIndex + 3));
    }
    return num;
  };

  return {
    emi: keepTwoDecimals(emi),
    processingFeeEMI: keepTwoDecimals(processingFeeEMI),
  };
}
