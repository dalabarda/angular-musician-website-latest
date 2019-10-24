import { Component, ElementRef, HostListener, Renderer2, Input, Output, ViewChild, EventEmitter, OnInit, AfterViewInit } from '@angular/core';


// import { trigger, style, animate, transition, state, AnimationEvent } from '@angular/animations';
import { trigger, style, animate, transition } from '@angular/animations';
import { DataService } from '../../../data/data.service';
import { GlobalService  } from './../../global/global.service';
import { IMenu  } from './../../../data/data';

// this should be placed in a constants directory to be more organized. dont forget to export it.
enum eMenuStates
{
    close   = 'closed',
    closing = 'closing',
    open    = 'open',
    opening = 'opening',
}


export enum eAnimationState
{
    none     = 'none',
    modified = 'modified',
    prevent  = 'prevent',
}



// this should be placed in a constants directory to be more organized. dont forget to export it.
const eDelays = {
    MENU_CLOSE:              100,
    MENU_OPEN:               100,
    DIALOG_LEAVE:            125,
    DIALOG_ENTER:            175,
};


export const dialogAnimations = [
    trigger('enter-leave', [
        transition(':enter', [style({ opacity: 0, transform: 'scale(0.8)' }), animate(eDelays.DIALOG_ENTER)]),
        transition(':leave', [animate(eDelays.DIALOG_LEAVE, style({ opacity: 0, transform: 'scale(0.9)' }))]),
    ])
];

@Component({
    selector: 'nav-bar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css'],
    animations: [
      trigger(
      'enteranimationBtn', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('350ms ease-in', style({transform: 'translateY(0)', opacity: 1 } ))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('350ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    ),
    ]
})


export class NavBarComponent // implements OnInit // , AfterViewInit
{
  // require('./checkInstallableOptionsConstraints.json')
  private _menus: IMenu[]
  private message: string
  private innerWidth: number;
  private _dropdown: boolean;

  private showMenus: boolean; // toggle animation test

  @Input()
  public htmlElement: string;
  
  @Output()
  public onNewEntryAdded: string;
  // public onNewEntryAdded: EventEmitter<any> = new EventEmitter<any>();

  // // // // // //

  get screenIsMobile(): boolean
  {
      // if (!this.innerWidth) return false;
      if (this.innerWidth > 515) return false;
      return true;
  }

  get menus(): IMenu[]
  {
      return this._menus;
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

  // workaround to place the btn back in case the screen is resized and the list was opened
  // in case the screen is rescale to mobile version, the button will be back.
    if(!this.screenIsMobile){
      this.showMenus = true
      this._dropdown = false
    }
  }

  get dropdown(): boolean
  {
      return this._dropdown;
  }

  constructor( private dataService: DataService,
               private globalService: GlobalService,
               private elementRef: ElementRef<HTMLElement>,
               private renderer: Renderer2,
              ) 
  {
    this._menus = [];
    // button need to start
    this._dropdown = false;
    this.showMenus = !this._dropdown;

    
    // initializing the variable
    this.innerWidth = window.innerWidth;

    //  getting the menus list from mock-data.ts dB
    this.dataService.getMenus()
      .subscribe(menus => {
        menus.forEach(menu => {
          if(menu.active)
            this.menus.push(menu)
        })
        // this.menus.sort() // Sort the list
      });
    
  }


  ngOnInit() {
	  // this.htmlElement = "Test";
    this.globalService.currentMessage.subscribe(message => this.message = message);
    // this.innerWidth = window.innerWidth;

	}

  // onClick(): void {

  // }

  addNewEntry(menu): void {
    this.globalService.changeMessage(menu.toString()); // HERE!!!!!!
    // var d1 = this.elementRef.nativeElement.querySelector('.container');
    this.globalService.heroClass = menu;
    
    console.log(menu.toString())
    
    
  }

  removeSvg() {
    var svg = this.elementRef.nativeElement.querySelector('svg');
  }
  
  // myFunction() {
  // var x = document.getElementById("myLinks");
  // if (x.style.display === "block") {
  //   x.style.display = "none";
  //   this._dropdown = true
  //   // this.btnShow = !this.btnShow
  //   // console.log(this.btnShow)
  // } else {
  //   x.style.display = "block";
  //   this._dropdown = false
  //   // this.btnShow = !this.btnShow
  //   // console.log(this.btnShow)
  //   }
  // }

  myFunction2() {
  if (!this.showMenus) {
    this.showMenus = true
    this._dropdown = false
  } else {
    this.showMenus = false
    this._dropdown = true
    this.addNewEntry('dv-empty');
    }
  }

    @Output()
    onEnter = new EventEmitter<void>();

    @Output()
    onLeave = new EventEmitter<void>();

}



// export const dialogAnimations = [
//     trigger('enter-leave', [
//         transition(':enter', [style({ opacity: 0, transform: 'scale(0.8)' }), animate(eDelays.DIALOG_ENTER)]),
//         transition(':leave', [animate(eDelays.DIALOG_LEAVE, style({ opacity: 0, transform: 'scale(0.9)' }))]),
//     ])
// ];


//     @HostBinding('@enter-leave')
//     get state(): eAnimationState
//     {
//         return this._state;
//     }
//     set state(value: eAnimationState)
//     {
//         this._state = value;
//     }


// -------
// 	animations: dialogAnimations,

//     @Output()
//     onEnter = new EventEmitter<void>();

//     @Output()
//     onLeave = new EventEmitter<void>();



//     @HostListener('@enter-leave.done', ['$event'])
//     onEnterLeaveDone(ev: AnimationEvent): void
//     {
//         if (ev.toState == 'void')
//             this.onLeave.next();

//         if (ev.fromState == 'void')
//             this.onEnter.next();

//         if (ev.toState != eAnimationState.none)
//             this.state = eAnimationState.none;
//     }



    //   trigger('state', [
    //     state(eMenuStates.close, style({ display: 'none' })),
    //     transition(`${eMenuStates.opening} => ${eMenuStates.open}`, [
    //         style({
    //             transform: 'scale(1, 0)', webkitTransform: 'scale(1, 0)',
    //         }),
    //         animate(eDelays.MENU_OPEN)
    //     ]),
    //     transition(`${eMenuStates.closing} => ${eMenuStates.close}`, [
    //         animate(eDelays.MENU_CLOSE,
    //             style({
    //                 transform: 'scale(1, 0)', webkitTransform: 'scale(1, 0)',
    //             })
    //         )
    //     ]),
    // ])