import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log(
      `initialInvestment: ${this.enteredInitialInvestment} annualInvestment: ${this.enteredAnnualInvestment} expectedReturn: ${this.enteredDuration} duration: ${this.enteredExpectedReturn}`
    );
  }
}
