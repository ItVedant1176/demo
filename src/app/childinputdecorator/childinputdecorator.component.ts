import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-childinputdecorator',
  imports: [],
  templateUrl: './childinputdecorator.component.html',
  styleUrl: './childinputdecorator.component.css'
})
export class ChildinputdecoratorComponent {
  @Input() childTitle:string=""

}
