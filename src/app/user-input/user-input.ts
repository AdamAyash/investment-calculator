import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
  standalone: true,
})
export class UserInput {
  public initialInvestment: number;
  public anualInvetsment: number;
  public expectedReturn: number;
  public duration: number;

  public constructor() {
    this.anualInvetsment = 0;
    this.initialInvestment = 0;
    this.expectedReturn = 0;
    this.duration = 0;
  }

  public onSubmit(): void {}
}
