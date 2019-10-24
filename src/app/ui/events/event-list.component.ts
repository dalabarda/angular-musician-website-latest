import { Component, OnInit, HostListener, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DataService } from '../../../data/data.service';

import { eAvailability, IEvent } from '../../../data/data';


import { EventService } from './event.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'dv-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
})
export class EventListComponent<T> implements OnInit
{
  private _events:      IEvent[]
  private innerWidth:   number;
  // // // // // //
  // private _selection:   ReadonlyArray<T>; // TODO: make the selection not only with CSS
  sub: Subscription;
  selectedProduct: InputEvent | null;


  // TODO: So far the selection is only done by CSS. this is not safe. It should be coded.
  /* here is an example on how to start a new selection procedure. 
   * @Input()
   * get selection(): ReadonlyArray<T> {
   *     return this._selection;
   * }
   * set selection(value: ReadonlyArray<T>) {
   *     this._selection = value;
   * }
  */

  get events(): IEvent[]{
      return this._events;
  }

  // TODO: screenIsMobile() should be in a directive. 
  // There are more occurence of the same code in other components
  get screenIsMobile(): boolean {
    if (this.innerWidth > 570) return false;
    return true;
  }


  @Output() onSelectionChange: EventEmitter<T[]>;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private dataService: DataService, 
              private eventService: EventService,
              ){
  // initializing the variable
  this._events              = [];
  // this._selection           = [];
  this.onSelectionChange    = new EventEmitter();
  this.innerWidth           = window.innerWidth;

  //  getting the events list from mock-data.ts dB
  this.dataService.getEvents()
    .subscribe(events => {
      events.forEach(event => {
        if(
          event.availability &&             // display only available ones
          event.date.getTime() > Date.now() // ignore past dates
          ) this.events.push(event);
        // 
      });

      // Sorting the list by date
      this.events.sort((a, b) => {
        return this.getTime(a.date) - this.getTime(b.date);
      }); 
      
    });

  }

  // used to sort the events list by date in case we have to handle undefined: 
  private getTime(date?: Date) { 
      return date != null ? date.getTime() : 0;
  }

  // ngOnDestroy(): void
  // {
  //     document.body.style.cursor = '';
  //     this.onSelectionChange.complete();
  // }

  ngOnInit(): void {
    this.sub = this.eventService.selectedProductChanges$.subscribe(
      selectedProduct => this.selectedProduct = selectedProduct);
  }

  onSelected(product: IEvent): void {
    console.log(product);
    this.eventService.changeSelectedProduct(product);
  }



  getStyleOriginal(item: eAvailability): string{
    const rgb = item === eAvailability.soldout ? 'red': '';
      return rgb;
  }

  // onBodySelectionChange(selection: T[]): void
  // {
  //     this.onSelectionChange.emit(selection);
  // }
}