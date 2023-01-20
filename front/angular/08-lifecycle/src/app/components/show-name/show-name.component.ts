import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html'
})
export class ShowNameComponent implements OnInit, OnChanges {

  @Input() name !: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
