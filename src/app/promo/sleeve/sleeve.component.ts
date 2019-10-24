import { Component } from '@angular/core';

@Component({
  selector: 'sleeve',
  templateUrl: './sleeve.component.html',
  styleUrls: [ './sleeve.component.css' ]
})
export class SleeveComponent  {
  name = 'Angular';

  departments: string[] = [];

  // the idea that the elements of a sleeve could be custom. according to the user song selection
  // please, rename this function later.
  removeDepartment(name: string): void {
    this.departments = this.departments.filter(item => item != name);
  }

  /* Eyes (2), Hair (1), face (4), neck(1), background(1), mouth(1), shoulders(2)  
   * 
   * 
  */

}



