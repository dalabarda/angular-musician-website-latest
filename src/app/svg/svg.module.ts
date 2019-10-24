import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgDefinitionsComponent } from './socialMedia/svgDefinitions.component'
import { SvgComponent } from './socialMedia/svg.component'


@NgModule({
    declarations: [ // Declare first...
        SvgDefinitionsComponent,
        SvgComponent,
    ],
    exports: [ //... to export here.
         SvgDefinitionsComponent,
         SvgComponent,
    ],
    entryComponents: [

    ],
    imports: [
        CommonModule,
    ],
    providers: [
         // here goes services
    ],

})
export class SvgModule { }