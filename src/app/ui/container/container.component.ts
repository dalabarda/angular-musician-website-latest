import { Component, ElementRef, Renderer2, ViewChild, ViewChildren, QueryList, ViewContainerRef } from '@angular/core';

import { DvListComponent  } from './../dvList/dvList.component';
import { HeroComponent  } from './../hero/hero.component';



@Component({
    selector: 'dv-container',
    template: `
              <div ngClass="hero-image2">
                <div ngClass="dv-hero">
                  
                  <nav-bar></nav-bar>
                  <dv-list [show]=menu></dv-list>
                    
                </div>
              </div>
              
              
              
              `,
    styleUrls: ['./container.component.css'],
})
export class ContainerComponent // implements OnInit, AfterViewInit
{
  private _menu: boolean = true; // toggle animation test

  get menu():boolean {
    return this._menu;
  }

  @ViewChild('dv_switch')
  private dvSwitch: ElementRef;

  @ViewChildren('div') 
  private divs: QueryList<any>

  // ViewContainerRef token: when you need to create templates or components dynamically
  @ViewChildren(HeroComponent, { read: ViewContainerRef }) alerts: QueryList<ViewContainerRef>
  @ViewChild(DvListComponent, { read: ViewContainerRef }) dvList: ViewContainerRef

  imgBack: string;

  constructor(
                private elementRef: ElementRef<HTMLElement>,
                private renderer: Renderer2,

  ){
    // this.elementRef.nativeElement.classList.add(this.getTrayTableClass());
  }

  ngAfterViewInit() {
    var d1 = this.elementRef.nativeElement.querySelector('.hero-image');
  //    d1.insertAdjacentHTML('beforeend', 
  //      this.elementRef.nativeElement
  //        .getElementsByTagName('dv-hero')[0]
  //        .innerHTML); 
  }

  addNewEntry(event) {
	  console.log(event);
  }

  onClick() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.dvSwitch.nativeElement, li);
  }


}



// https://earthobservatory.nasa.gov/images/145464/fires-in-brazil



// ISSUE TO FIX:
// on nv-bar mobile phone display the dropdown click should disable dv-list --->display: none; and reenable it when a menu is selected.