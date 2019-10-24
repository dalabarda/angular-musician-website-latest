import { Component, Input, Directive, ViewChild, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Pane } from './directives/cardHover.directive';


import { Observable, Subject } from 'rxjs';
import { trigger, style, animate, transition } from '@angular/animations';

import { GlobalService } from './global/global.service';


import { DataService } from '../data/data.service';


type Post = { title: string, content: string };
const CLICK_FOR_DISPLAYSOMETHING_THRESHOLD_MS = 2000;
const CLICK_FOR_DISPLAYSOMETHING_THRESHOLD_COUNT = 5;


// THIS COMPONENT IS JUST FOR TESTING
@Component({
  selector: 'hello',
  animations:[
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'enterAnimation2', [
        transition(':enter', [
          style({ opacity: 0}),
          animate('500ms', style({  opacity: 1  }))
        ]),
        transition(':leave', [
          style({ opacity: 1}),
          animate('500ms', style({  opacity: 0  }))
        ])
      ]
    )
  ],
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [GlobalService],
})
export class HelloComponent
{
  private show: boolean = false; // toggle animation test
  private ClickTracker: undefined | number[];
  private showSomething: boolean;
  private _showSomethingLabel: string; 
  private interval;
  private ipAddress: any;
  private errorFromSubscribe;

  // @Output() // if placed in another component
  onSelectionChange: EventEmitter<T>;

  get showSomethingLabel(): string
  {
      return this.showSomething ? 'hide' : 'show';
  }

  constructor(private http: HttpClient) {
    this.showSomething = false;
    this.ClickTracker = [];
    this.ipAddress = {};
    // recover one-by-one the values of the click times.
    this.startTimer()




    this.http.get('https://ipgeolocation.com?json=1')
      .subscribe((res: Response) => {
        console.log('ip data', res);
        this.ipAddress = res;
      }, error => {
        console.log(error);
        if (error)
          return this.ipAddress.ip = 'It was not possible to get your IP =('
        this.errorFromSubscribe = error;
      });

    // https://ipapi.co/json/                 "52.4437,  13.5052"
    // https://ipgeolocation.com?json=1       "52.473700,13.336900"
    // https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript

  }


  onBtnSelectionChange(): void
  {
      // this.selectedEl = eNum; // not needed here
      // Check if the user has made service-settings visible
      // if (!this.authenticationService.admin || this.showServiceSettings.visible)
          // return; // Already visible or user is not an administrator, so skip this.
      // if (eNum == eNum)
      // {
          // if (this.ClickTracker == undefined)
          //     {this.ClickTracker = [Date.now()];
          // else
          // {
              const now = Date.now();
              this.ClickTracker.push(now);

              this.ClickTracker = this.ClickTracker.filter(time => (now - time) <= CLICK_FOR_DISPLAYSOMETHING_THRESHOLD_MS);
              if (this.ClickTracker.length >= CLICK_FOR_DISPLAYSOMETHING_THRESHOLD_COUNT)
              {
                  this.showSomething = !this.showSomething;
                  // this.showSomething.value = true;
                  // delete this.ClickTracker; // No longer need to track this.
                  this.ClickTracker = []
              }
          // }
      // }
      // else if (this.ClickTracker)
      //     delete this.ClickTracker;
  }


  startTimer() {
    setInterval(() => {
      const now = Date.now();
      if(now - this.ClickTracker[this.ClickTracker.length - 1] > CLICK_FOR_DISPLAYSOMETHING_THRESHOLD_MS) {
        this.ClickTracker.pop(); // shift() to remove the first; pop() to remove the last
      } else if ( this.ClickTracker.length == 0){
        this.ClickTracker = [];
      }
    },1000)
  }

}

 enum AgentStatus {
    available =1 ,
    busy = 2,
    away = 3,
    offline = 0
}

@Component({
  selector: 'example-app',
  template: `
    <pane id="1" *ngIf="shouldShow"></pane>
    <pane id="2" *ngIf="!shouldShow"></pane>
    
    <div  (mouseenter)="toggle()"
          (mouseleave) ="toggle2()"
      >Toggle</div>
       
    <div>
      Selected: {{ selectedPane }}
      <br> 
      count: {{ countPane }}
    </div>
    <br>

    <div *ngFor="let tm of testMap; let i = index">
        <li> {{ i + 1 }} - {{ tm }}</li>
    </div>
    <div> the random number is: {{ x }}</div>

    <br>
    <br>
      <h1>Choose Value</h1>
  
  <select (change)="parseValue($event.target.value)">
    <option>--select--</option>
    <option *ngFor="let name of options"
        [value]="name">{{name}}</option>
  </select>
  
  <h1 [hidden]="myValue == null">
    You entered {{AgentStatus[myValue]}}
    <br>
    You are {{isOffline ? "offline" : "not offline"}}.
  </h1>
  
<br>
<br>

    <button (click)="nextUser()">Next User</button>
    <br>
    <div *ngIf="userObservable | async as user; else loading">
      Hello {{user.last}}, {{user.first}}!
    </div>
    <ng-template #loading let-user>Waiting... (user is {{user|json}})</ng-template>
  `,
})
export class ViewChildComp {
  
  @Input() id !: string;
  
  @ViewChild(Pane)
  set pane(v: Pane) 
  {
    setTimeout(() => { this.selectedPane = v.id; }, 0);
  }
  selectedPane: string = '';
  countPane: number = 0;
  shouldShow = true;
  toggle() { 
    this.shouldShow = !this.shouldShow;
    this.countPane += 1; 
    }
  toggle2() { 
    this.shouldShow = !this.shouldShow;
    }

    // example of an Object
  companies = [
    {name: "arroz", category: "food", start: 1987, end: 1994},
    {name: "feijao", category: "", start: 1987, end: 1994},
    {name: "macarrao", category: "", start: 1987, end: 1994},
    {name: "cafe", category: "food", start: 1987, end: 1994},
    {name: "manga", category: "", start: 1987, end: 1994},
    {name: "trigo", category: "food", start: 1987, end: 1994}
  ];

  // example of an Array
  ages = [33, 64, 12, 64, 98, 12, 25, 33, 65, 70, 25, 25, 22, 36, 50]

  testMap = this.companies
    .map(company => `${company.name} [${company.start} - ${company.end}]`);

  ageMap = this.ages
    .map(age => Math.sqrt(age)) // 
    .map( age => age * 2); // 

  
  combined = this.ages
    .map(age => age * 2)    // 
    .filter( age => age >= 40)    //
    .sort((a, b) => a - b)    //
    .reduce((a, b) => a + b, 0);  //

  // display a random number between 1 and 12.
  x = Math.floor((Math.random() * 12) + 1);


// ///////////////////////////////////////////////////


  options : string[];
  myValue: AgentStatus;
  AgentStatus : typeof AgentStatus = AgentStatus;
  isOffline : boolean;
  
  ngOnInit() {
    var x = AgentStatus;
    var options = Object.keys(AgentStatus);
    this.options = options.slice(options.length / 2);
  }
  
  parseValue(value : string) {
    this.myValue = AgentStatus[value];
    this.isOffline = this.myValue == AgentStatus.offline;
  }



  userObservable = new Subject<{first: string, last: string}>();
  first = ['John', 'Mike', 'Mary', 'Bob'];
  firstIndex = 0;
  last = ['Smith', 'Novotny', 'Angular'];
  lastIndex = 0;
 
  nextUser() {
    let first = this.first[this.firstIndex++];
    if (this.firstIndex >= this.first.length) this.firstIndex = 0;
    let last = this.last[this.lastIndex++];
    if (this.lastIndex >= this.last.length) this.lastIndex = 0;
    this.userObservable.next({first, last});
  }

}




// https://www.google-analytics.com/r/collect
// https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/
// https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/

// NICE SITE
// https://www.kaaboodelmar.com/
//  https://malcoded.com/posts/angular-dynamic-components/
// https://www.sitepoint.com/feathers-js-guide/



// cool user. with loots of examples:
  // https://stackblitz.com/@christophechevalier

// https://stackblitz.com/edit/angular-blob-file-download?file=app%2Fapp.component.ts