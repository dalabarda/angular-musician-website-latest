import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SleeveComponent } from './sleeve/sleeve.component'


@NgModule({
    declarations: [     // Declare first...
        // MediaComponent,
        SleeveComponent,
    ],
    exports: [          //... to export here.
        // MediaComponent,
        SleeveComponent,
    ],
    // entryComponents: [
    //     MediaComponent,
    //     PlatformsComponent
    // ],
    imports: [
        CommonModule,
    ],
    providers: [
         // here goes services
    ],
})
export class PromoModule { }



// JokeComponent, JokeListComponent