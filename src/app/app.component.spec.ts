import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should passwordlength = 25', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.inputLength({ value: '25' });

    expect(app.passwordLength).toEqual(25);
  });

  it('should includesymbols to be true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const initialSymbol = app.includeSymbols;
    app.addSymbols();
    const finialSymbol = app.includeSymbols;

    expect(finialSymbol).not.toEqual(initialSymbol);
  });

  it('should includenumber to true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const initialumber = app.includeNumbers;
    app.addNumbers();
    const finialNumber = app.includeNumbers;

    expect(finialNumber).not.toEqual(initialumber);
  });

  it('should add letter to true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.addLetters();

    expect(app.includeLetters).not.toEqual(false);
  });
});
