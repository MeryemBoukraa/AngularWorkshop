import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalContractsComponent } from './rental-contracts.component';

describe('RentalContractsComponent', () => {
  let component: RentalContractsComponent;
  let fixture: ComponentFixture<RentalContractsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalContractsComponent]
    });
    fixture = TestBed.createComponent(RentalContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
