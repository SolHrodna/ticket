import { Component} from '@angular/core';
import { NavController, IonicPage, Platform} from 'ionic-angular';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

map: GoogleMap;

constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, private platform: Platform) {

}


ngAfterViewInit() {
 this.platform.ready().then(() => {
    this.loadMap();
  })};

loadMap() {
  this.map = new GoogleMap('map');

  this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
    console.log('Map is ready!');
  });
}


}