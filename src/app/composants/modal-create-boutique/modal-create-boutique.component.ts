import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { Boutique } from 'src/app/models/Boutique';
import { Vendeur } from 'src/lvt-api/src/models/vendeur';
import { FileHandle } from 'src/app/models/FileHandle';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { BoutiqueService } from 'src/app/services/boutique.service';
@Component({
  selector: 'app-modal-create-boutique',
  templateUrl: './modal-create-boutique.component.html',
  styleUrls: ['./modal-create-boutique.component.css']
})
export class ModalCreateBoutiqueComponent {

  form: FormGroup;
  Boutique: Boutique={
    id:null ,
    nom: "",
    adresse: "",
    telephone: "",
    email: "",
    siteWeb: "",
    horaire: "",
    vendeur: {
      id: 14,
    } as Vendeur,
    images: [] as FileHandle[]

  };

  constructor(private fb: FormBuilder, private sharedService: SharedServiceService, private sanitizer: DomSanitizer, private boutiqueService: BoutiqueService) {
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

  onFileSelected(event: any) {
    if(event.target.files){
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.Boutique.images.push(fileHandle);
    };




  }

  prepateFormData(boutique: Boutique): FormData {
     const formData = new FormData();
     formData.append(
      'boutique', new Blob([JSON.stringify(boutique)], {type: 'application/json'})
     );
     for(var i=0; i<boutique.images.length; i++){
       formData.append(
        'image_boutique', 
       boutique.images[i].file,
       boutique.images[i].file.name);
     }

     return formData;

  }


  create(){
    const formData = this.prepateFormData(this.Boutique);
    this.boutiqueService.saveOrUpdate(formData).subscribe(data => {
      console.log(data);
    });
  }
}
