import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusticsComponent } from './statustics.component';

describe('StatusticsComponent', () => {
  let component: StatusticsComponent;
  let fixture: ComponentFixture<StatusticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
