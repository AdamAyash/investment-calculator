import { Injectable } from '@angular/core';
import { AnualData } from './anual-data.model';
import { UserInvestmentDataModel } from '../user-input/user-investment-data.model';

@Injectable({
  providedIn: 'root',
})
export class InvetstmentService {
  private _annualData: AnualData[] = [];

  public get annualData(): AnualData[] {
    return this._annualData;
  }

  public calculateInvestmentResults(userInvestmentDataModel: UserInvestmentDataModel) {
    let investmentValue = userInvestmentDataModel.initialInvestment;

    for (let index = 0; index < userInvestmentDataModel.duration; index++) {
      const year = index + 1;
      const interestEarnedInYear = investmentValue * (userInvestmentDataModel.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInvestmentDataModel.anualInvetsment;
      const totalInterest =
        investmentValue -
        userInvestmentDataModel.anualInvetsment * year -
        userInvestmentDataModel.initialInvestment;
      this._annualData.push({
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
  }
}
