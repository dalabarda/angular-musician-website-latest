import { Component, Input, ElementRef, Renderer, ViewChild, Directive } from '@angular/core';


@Component({
  selector: 'svg-definitions',
  templateUrl: './svgDefinitions.component.html',
  styleUrls: ['./svgDefinitions.component.css']
})
export class SvgDefinitionsComponent {
  @Input() name: String;


  public testing_fill = 'blue';

  orange()
  {
    return
    if(this.testing_fill == 'blue'){
      this.testing_fill =  ' red'; // this.name + 
    }else{
          this.testing_fill = 'blue';
    }
    // element.setAttribute("style", "color:red; border: 1px solid blue;");
    // this.icon.hover ? 'svg' : 'name or something';
  }
}



