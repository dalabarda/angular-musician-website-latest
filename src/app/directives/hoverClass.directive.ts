import { Directive, Input, OnInit, HostListener, HostBinding, Renderer, Renderer2, ElementRef } from '@angular/core';


@Directive({ 
  selector: '[hoverClass]' 
})
export class HoverClassDirective implements OnInit {
  
  // @Input()
  hoverClass: string;

  // accesing DOM properties should be done trough cammel-case. 
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }


  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.elementRef.nativeElement.style.backgroundColor = 'green';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, this.hoverClass, 'blue');
    this.backgroundColor = this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, this.hoverClass, 'transparent');
    this.backgroundColor = this.defaultColor;
  };


  @HostListener('click') 
  performTask() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('Click here to add li');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.elementRef.nativeElement, li);
  }
}


  // using template literals
  // this.renderer.setStyle(element, 'top', `${this.data.top}px`);
  // this.renderer.setStyle(element, 'right', `${this.data.right}px`);