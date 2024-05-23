import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Location } from 'src/app/models/Location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  Locations : Location[] = [];
    clientId: number = 0;

  constructor(private locationService: LocationService,private route: ActivatedRoute,private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getIdClient();
  }

  getLocations(){
    this.locationService.getByClient(this.clientId).subscribe(data => {
      this.Locations = data;
      console.log(data);
    });
  }
   
  getIdClient() {
    const email= localStorage.getItem('auth') || '';
    this.authService.getId(email).subscribe(
      data => {
        this.clientId = data;
        this.getLocations();
      }
    );
  }
}
