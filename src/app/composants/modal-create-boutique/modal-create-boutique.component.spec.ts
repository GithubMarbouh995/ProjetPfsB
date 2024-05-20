import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateBoutiqueComponent } from './modal-create-boutique.component';

describe('ModalCreateBoutiqueComponent', () => {
  let component: ModalCreateBoutiqueComponent;
  let fixture: ComponentFixture<ModalCreateBoutiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCreateBoutiqueComponent]
    });
    fixture = TestBed.createComponent(ModalCreateBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
