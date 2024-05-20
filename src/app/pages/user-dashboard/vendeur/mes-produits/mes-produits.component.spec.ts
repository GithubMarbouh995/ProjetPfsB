import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesProduitsComponent } from './mes-produits.component';

describe('MesProduitsComponent', () => {
  let component: MesProduitsComponent;
  let fixture: ComponentFixture<MesProduitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesProduitsComponent]
    });
    fixture = TestBed.createComponent(MesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
