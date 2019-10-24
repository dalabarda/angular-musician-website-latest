import { Component } from '@angular/core';
import { DataService } from '../../../data/data.service';


@Component({
    selector: 'dv-hero',
    template: `            
                <div>
                  <svg-icon class=""
                    *ngFor="let platform of platforms"
                    name="{{ platform }}">
                  </svg-icon>
                </div>
                `,
    styleUrls: ['./hero.component.css']
})


export class HeroComponent // implements OnInit, AfterViewInit
{
  private platforms: any[] // TOFIX: ix the type later



  constructor(
              private dataService: DataService,
              ) 
  {
  this.platforms = [];

  
  // getting the platforms list from mock.data.ts dB
  this.dataService.getPlatforms()
    .subscribe(platforms => {
      platforms.forEach(platform => {
        if(platform.active)
          this.platforms.push(platform.icon);
      })
    })
  
  }

}