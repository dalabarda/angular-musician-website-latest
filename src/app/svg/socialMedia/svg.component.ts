import { Component, Input, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';



@Component({
  selector: 'svg-icon',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.css']
})

export class SvgComponent {
  private _svgWidth: number;
  private _my_Class: string = 'svg';
  private _show: boolean = false;


  @Input() 
  private name: string;

  get absUrl():string {
    return window.location.href;
  }

  get my_Class():string {
    return this._my_Class;
  }

  set my_Class(value: string){
      this._my_Class = value;
  }

  get show():boolean {
    return this._show;
  }

  set show(value: boolean){
      this._show = value;
  }


  @HostListener('window:resize', ['$event'])  
  get svgWidth(){
    return this._svgWidth = Math.round((window.innerWidth)/7);  
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  myInnerWidth() { 
    // magic number
    return window.innerWidth/7;
  }


  // Initializing...
  constructor(@Inject(DOCUMENT) private document: any) { }


  //function to change the class from style1 to style 2 when clicked
  toggle_class(){
      if(this.my_Class == 'svg'){
          this.my_Class =  this.name + '_hover';
          this.show = true;
      }else{
          this.my_Class = 'svg';
          this.show = false;
      }
  }

  onSocialMediaIconClick(): void
  {
    if(eLinks[this.name] == undefined )
      return alert('This link is not working at the moment, sorry =(')
    else
      this.document.location.href = eLinks[this.name.toString()]; 
  }

}


// TODO: move this to a apropriate place.
export enum eLinks
{
  amazon_icon = 'https://music.amazon.de',
  applemusic_icon = 'https://www.apple.com/de/apple-music/',
  bandcamp_icon = 'https://bandcamp.com/',
  deezer_icon = 'https://www.deezer.com/',
  facebook_icon = 'https://www.facebook.com/jaghopakistani/videos/1041892465847267/',
  instagram_icon = 'https://www.instagram.com/guitar.monkey/',
  soundcloud_icon = 'https://soundcloud.com/monkeypro',
  spotify_icon = 'https://open.spotify.com/artist/5UZZbtzlIKJO9HA6RHChKb',
  tidal_icon = 'https://tidal.com/',
  youtube_icon = 'https://www.youtube.com/user/OldGuitarMonkey/videos',
}