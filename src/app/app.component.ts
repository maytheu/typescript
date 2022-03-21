import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pswdgen';

  password: string = '';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  passwordLength: number = 0;

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_';
    const number = '1234567890';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += number;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const ind = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[ind];
    }

    this.password = generatedPassword;
  }

  addLetters() {
    this.includeLetters = !this.includeLetters;
  }

  addSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  addNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  inputLength(val: any) {
    const parseVal = +val.value;
    if (!isNaN(parseVal)) {
      this.passwordLength = parseVal;
    }
  }
}
