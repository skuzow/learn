import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .map-container {
        height: 100%;
        width: 100%;
      }
      
      .row {
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 999;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('map') divMap!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 14;

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
        container: this.divMap.nativeElement,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ -3.6829559362718958, 40.414294045943784 ],
        zoom: this.zoomLevel
    });
  }

  zoomOut() {
    this.map.zoomOut();
    this.zoomLevel = this.map.getZoom();
  }

  zoomIn() {
    this.map.zoomIn();
    this.zoomLevel = this.map.getZoom();
  }

}
