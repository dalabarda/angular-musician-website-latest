import { ElementRef, Directive, Renderer, HostListener, 
          HostBinding, AfterViewChecked, Input, ViewChild 
          } from '@angular/core';


// hoovering the mouse over social media elements. 
@Directive({
  selector: '[ccNavBarClick]'
})
export class CardHoverDirective { // ---> should go to ngModule imports
  @HostBinding('class.card-outline-primary')
  private ishovering: boolean;

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover')
  onMouseOver() {
    let part = this.el.nativeElement;
    this.renderer.setElementStyle(part, 'backgroundColor', 'green');
    this.renderer.setElementStyle(part, 'font-family', 'Arial');
    this.ishovering = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    let part = this.el.nativeElement;
    this.renderer.setElementStyle(part, 'backgroundColor', 'pink');
    this.renderer.setElementStyle(part, 'font-family', 'Lato');
    this.ishovering = false;
  }

  @HostListener('click')
  onNavClick() {
    let partEl = this.el.nativeElement;
    this.renderer.setElementStyle(partEl, 'backgroundColor', 'pink');
    // this.renderer.setElementProperty(partEl, 'this')
    // this.ishovering = false;
  }
}

@Directive({
  selector: 'pane'
})
export class Pane {
  @Input() id !: string;
}



@Directive({
    selector: '[myMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {
    // class name to match height
    @Input()
    myMatchHeight: string;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        // call our matchHeight function here later
    }

    matchHeight(parent: HTMLElement, className: string) {
        // match height logic here
    }
}