import { Injectable } from '@angular/core';
import { AnualData } from './anual-data.model';
import { UserInvestmentDataModel } from '../user-input/user-investment-data.model';

@Injectable({
  providedIn: 'root',
})
export class InvetstmentService {
  public calculateInvestmentResults(userInvestmentDataModel: UserInvestmentDataModel): AnualData[] {
    let annualData: AnualData[] = [];
    let investmentValue = userInvestmentDataModel.initialInvestment;

    for (let index = 1; index <= userInvestmentDataModel.duration; index++) {
      const year = index;
      const interestEarnedInYear = investmentValue * (userInvestmentDataModel.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInvestmentDataModel.anualInvetsment;
      const totalInterest =
        investmentValue -
        userInvestmentDataModel.anualInvetsment * year -
        userInvestmentDataModel.initialInvestment;
      annualData.push({
        Id: index,
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInvestmentDataModel.anualInvetsment,
        totalInterest: totalInterest,
        totalAmountInvested:
          userInvestmentDataModel.initialInvestment +
          userInvestmentDataModel.anualInvetsment * year,
      });
    }

    return annualData;
  }
}
