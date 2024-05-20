import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-modal-create-boutique',
  templateUrl: './modal-create-boutique.component.html',
  styleUrls: ['./modal-create-boutique.component.css']
})
export class ModalCreateBoutiqueComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedServiceService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
      // Close modal programmatically if needed
    }
  }


  cancel() {
    this.sharedService.emitCancelEvent();
  }

}
