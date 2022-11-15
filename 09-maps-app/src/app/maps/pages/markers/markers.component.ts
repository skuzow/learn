import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


interface ColorMarker {
  marker: mapboxgl.Marker;
  color: string;
}

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styles: [
    `
      .map-container {
        height: 100%;
        width: 100%;
      }

      .list-group {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 99;
      }

      li {
        cursor: pointer;
      }
    `
  ]
})
export class MarkersComponent implements AfterViewInit {

  @ViewChild('map') divMap!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 14;
  center: [number, number] = [ -3.6829559362718958, 40.414294045943784 ];

  markers: ColorMarker[] = [];

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });
    /* marker with html stuff
    const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'Hello world';
    const marker = new mapboxgl.Marker({ element: markerHtml })
      .setLngLat(this.center)
      .addTo(this.map);
    */
  }

  addMarker() {
    // random hexa color code
    const color = "#xxxxxx".replace(/x/g, y => (Math.random()*16|0).toString(16));
    const newMarker = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat(this.center)
      .addTo(this.map);
    this.markers.push({ marker: newMarker, color });
  }

  goMarker() {
    
  }

}
