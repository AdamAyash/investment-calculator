import { Component, Input } from '@angular/core';
import { AnualData } from '../investment-service/anual-data.model';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css',
})
export class InvestmentResult {
  @Input() public anualData: AnualData[] = [];

  public constructor() {}

  public isVisiable(): boolean {
    return this.anualData.length > 0;
  }
}
