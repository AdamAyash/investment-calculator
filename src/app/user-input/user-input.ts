import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvetstmentService } from '../investment-service/invetstment-service';
import { UserInvestmentDataModel } from './user-investment-data.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
  standalone: true,
})
export class UserInput {
  public initialInvestment!: number;
  public anualInvetsment!: number;
  public expectedReturn!: number;
  public duration!: number;

  @Output() public calculateInvestmentResult = new EventEmitter<UserInvestmentDataModel>();

  public constructor(private investementService: InvetstmentService) {
    this.clear();
  }

  private clear() {
    this.anualInvetsment = 0;
    this.initialInvestment = 0;
    this.expectedReturn = 0;
    this.duration = 0;
  }

  public onSubmit(): void {
    let userInvestmentModel: UserInvestmentDataModel = {
      anualInvetsment: this.anualInvetsment,
      duration: this.duration,
      expectedReturn: this.expectedReturn,
      initialInvestment: this.initialInvestment,
    };

    this.calculateInvestmentResult.emit(userInvestmentModel);
    this.clear();
  }
}
