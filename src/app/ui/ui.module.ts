import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './navBar/navBar.component';
import { FooterBarComponent } from './footerBar/footerBar.component';
import { HeroComponent } from './hero/hero.component';
import { SvgModule } from './../svg/svg.module';
import { ContainerComponent } from './container/container.component';
import { DvListComponent } from './dvList/dvList.component';
import { PromoComponent } from './promo/promo.component';
import { EventListComponent } from './events/event-list.component';

import { EventMapComponent } from './events/event-map.component';
import { EventShellComponent } from './events/event-shell.component';
import { EventService } from './events/event.service';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
    declarations: [ // Declare first...
        ContainerComponent,
        DvListComponent,
        EventListComponent,
        EventMapComponent,
        EventShellComponent,
        FooterBarComponent,
        HeroComponent,
        NavBarComponent,
        PromoComponent,
    ],
    exports: [ //... to export here.
         ContainerComponent,
         FooterBarComponent,
         EventListComponent,
         EventMapComponent,  
        //  NavBarComponent,  // I think this is not necessary
        //  HeroComponent,    // I think this is not necessary
        //  DvListComponent,  // I think this is not necessary
        
    ],
    // entryComponents: [
    //     NavBarComponent,
    // ],
    imports: [
        CommonModule,
        SvgModule,
        LeafletModule,
    ],
    providers: [
        EventService,
         // here goes services
    ],

})
export class UiModule { }