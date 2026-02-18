import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResult } from './investment-result/investment-result';
import { InvetstmentService } from './investment-service/invetstment-service';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  constructor(private invetstmentService: InvetstmentService) {}

  public onCalculateInvestmentResult() {}
}
