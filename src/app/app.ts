import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResult } from './investment-result/investment-result';
import { InvetstmentService } from './investment-service/invetstment-service';
import { UserInvestmentDataModel } from './user-input/user-investment-data.model';
import { AnualData } from './investment-service/anual-data.model';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  public anualData: AnualData[] = [];

  constructor(private investementService: InvetstmentService) {}

  public onCalculateInvestmentResult(userInvestmentDataModel: UserInvestmentDataModel) {
    this.anualData = this.investementService.calculateInvestmentResults(userInvestmentDataModel);
  }
}
