import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { PromoModule } from './promo/promo.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { SvgModule } from './svg/svg.module';
// import { PromoModule } from './promo/promo.module'; 

import { AppComponent } from './app.component';
import { HelloComponent, ViewChildComp } from './hello.component';

// directives
import { Pane } from './directives/cardHover.directive';
import { HoverClassDirective } from './directives/hoverClass.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient  } from '@angular/common/http'; 
import { HttpModule  } from '@angular/http'; 




// import { createCustomElement } from '.user'
// const config = {
//   firebase config
// }

import { AngularFireModule } from 'angularfire2';

// import { AngularFirestoreM}

import { GlobalService } from './global/global.service';
@NgModule({
       imports: [ BrowserAnimationsModule,
                  BrowserModule, 
                  FormsModule, 
                  HttpClientModule,
                  HttpModule,
                  PromoModule,
                  SvgModule,
                  UiModule,
                  LeafletModule.forRoot(),
                   ],
  
  declarations: [ AppComponent, 
                  HelloComponent,
                  HoverClassDirective,
                  Pane,
                  ViewChildComp, // example from hello component. remove later
                  ],
  
  providers:    [
                  GlobalService,
                  HttpClientModule,
                  HttpModule,
                  ], // here goes services
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
// import { HttpClientModule, /* other http imports */ } from "@angular/common/http";