import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


interface ColorMarker {
  marker?: mapboxgl.Marker;
  center?: [ number, number ];
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
    this._readMarkers();
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
    this._generateMarker(this.center, color);
    this._saveMarkers();
  }

  goMarker(marker: mapboxgl.Marker) {
    this.map.flyTo({ center: marker.getLngLat() });
  }

  removeMarker(i: number) {
    this.markers[i].marker?.remove();
    this.markers.splice(i, 1);
    this._saveMarkers();
  }

  private _generateMarker(center: [ number, number ], color: string) {
    const newMarker = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat(center)
      .addTo(this.map);
    newMarker.on('dragend', () => this._saveMarkers());
    this.markers.push({ marker: newMarker, color });
  }

  private _saveMarkers() {
    const lngLatArr: ColorMarker[] = [];
    this.markers.map(m => {
      const { lng, lat } = m.marker!.getLngLat();
      lngLatArr.push({ color: m.color, center: [ lng, lat ] });
    });
    localStorage.setItem('markers', JSON.stringify(lngLatArr));
  }

  private _readMarkers() {
    const markersLocalStorage: string | null = localStorage.getItem('markers');
    if (!markersLocalStorage) return;
    const lngLatArr: ColorMarker[] = JSON.parse(markersLocalStorage);
    lngLatArr.map(m => this._generateMarker(m.center!, m.color));
  }

}
