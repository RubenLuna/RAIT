import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'div->google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map: any;
  constructor() {

  }

  ngOnInit() {

    this.initMap();

  }

  initMap() {

    //cd juarez lat long
    //31.73333, -106.48333

    let coords = new google.maps.LatLng(31.6653568, -106.397696);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    });

  }

}
