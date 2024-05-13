import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('image_profile', { static: false }) imageProfile!: ElementRef;
  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageProfile.nativeElement.src = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
