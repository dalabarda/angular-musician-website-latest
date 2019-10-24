import { Component } from '@angular/core';



@Component({
    selector: 'dv-promo',
    template: `
            <div>
              Promo Component!
            </div>
              `,
    styleUrls: ['./promo.component.css']
})
export class PromoComponent // implements OnInit, AfterViewInit
{
  
}


// IN CASE I WANNA SET TOOLTIP


// const CURSOR_OFFSET = 22;
// const MARGIN        = 12;

// export const tooltipAnimations = [
//     trigger('enter-leave', [
//         transition(':enter', [style({ opacity: 0 }), animate(eDelays.TOOLTIP_ENTER)]),
//         transition(':leave', [animate(eDelays.TOOLTIP_LEAVE, style({ opacity: 0 }))])
//     ])
// ];


// @Component({
//     selector: 'nt-tooltip',
//     templateUrl: './tooltip.component.html',
//     styleUrls: ['./tooltip.component.css'],
//     animations: tooltipAnimations,
// })



// ##################################

    // protected setPosition(): void
    // {
    //     const element: HTMLElement = this.elementRef.nativeElement;

    //     const tw = element.clientWidth;
    //     const th = element.clientHeight;
    //     const bodyW = document.body.clientWidth;
    //     const bodyH = document.body.clientHeight;
    //     const maxX = bodyW - tw - MARGIN;
    //     const maxY = bodyH - th - MARGIN;
    //     const left = Math.min(this.data.mouseX, maxX) + window.pageXOffset;
    //     const top = (this.data.mouseY + CURSOR_OFFSET > maxY ? this.data.mouseY - th
    //                                                          : this.data.mouseY + CURSOR_OFFSET) + window.pageYOffset;
    //     this.renderer.setStyle(element, 'top', `${top}px`);
    //     this.renderer.setStyle(element, 'left', `${left}px`);
    // }


