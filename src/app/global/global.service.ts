import { Injectable, ElementRef, Renderer2, } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Response } from '@angular/http'; 
import { Observable, BehaviorSubject } from 'rxjs';


declare var require: any


interface IEmployee {
  id: number;
  name: string;
  age: number;
}


@Injectable()
export class GlobalService
{
  private _url: string = './assets/mydata.json';
  heroClass: string = 'dv-hero';

  // hold the current value
  private messageSource = new BehaviorSubject<string>("dv-hero");
  
  // used by the component 
  currentMessage = this.messageSource.asObservable();


  constructor(
                private http: HttpClient,
                private elementRef: ElementRef<HTMLElement>,
                private renderer: Renderer2,){}

  
  // NOTE: not working, just for future reference:
  public getData(): Observable<IEmployee[]>{ // change the any later
    return this.http.get<IEmployee[]>(this._url)
      // .map((resp: Response) => resp.json())
      ;
  }


  // call next on the behavior subject to change its current value 
  changeMessage(message: string){
    let msg: string = this.heroClass;
    const dynamicClass = this.elementRef.nativeElement.querySelector('.'+msg);
    
    this.messageSource.next(message)

    if (msg != message){
      // remote previous dynamic class
      this.renderer.removeClass(dynamicClass, msg);
      // add the new class clicked in navBar
      this.renderer.addClass(dynamicClass, message);
      msg = message;
    }
    else
      {return;}
  }
  
}

