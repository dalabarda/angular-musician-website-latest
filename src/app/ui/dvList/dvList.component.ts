import { Component, Input } from '@angular/core';
import { GlobalService  } from './../../global/global.service';


import { trigger, style, animate, transition } from '@angular/animations';

const time = 300; // delay to coincide with animation. the same as declared in @Component

@Component({
  selector: 'dv-list',
  templateUrl: './dvList.component.html',
  styleUrls: [ './dvList.component.css' ],
  animations:[
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: 0}),
          animate(time+'ms', style({  opacity: 1  }))
        ]),
        transition(':leave', [
          style({ opacity: 1 }),
          animate(time+'ms', style({  opacity: 0,  }))
        ])
      ]
    )
  ],
})
export class DvListComponent {
  private _show:    boolean;
  private _message: string;

  get message(): string{
    return this._message;
  } 

  @Input()
  set show(menu: boolean){
    this._show = menu;
  }

  constructor( private globalService: GlobalService,
             ) {  }


  ngOnInit() {
  this.globalService.currentMessage.subscribe((message) => {
    this.message == message ? '' : this.onClickChange(message) 
    })
  }

  newContainer(cont: string) {
    if (this.message == cont)
      return true
    else
      false
  }
  onClickChange(message) {
    this._message = ''; 
    setTimeout(() => { 
      this._message = message;
    }, time);
  }

}
