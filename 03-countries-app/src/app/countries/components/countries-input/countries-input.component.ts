import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';


@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html'
})
export class CountriesInputComponent implements OnInit {

  term: string = '';
  debouncer: Subject<string> = new Subject();

  @Input('searchPlaceHolderData') searchPlaceHolder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter;
  @Output() onDebounce: EventEmitter<string> = new EventEmitter; // when user stops writing

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300)) // 300ms
      .subscribe(term => {
        this.onDebounce.emit(term);
    });
  }

  search() {
    this.onEnter.emit(this.term);
  }

  keyPressed() {
    this.debouncer.next(this.term);
  }

}
