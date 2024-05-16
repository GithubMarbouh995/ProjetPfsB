import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenirVendeurComponent } from './devenir-vendeur.component';

describe('DevenirVendeurComponent', () => {
  let component: DevenirVendeurComponent;
  let fixture: ComponentFixture<DevenirVendeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevenirVendeurComponent]
    });
    fixture = TestBed.createComponent(DevenirVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
