import { Component } from '@angular/core';
import { ChildinputdecoratorComponent } from '../childinputdecorator/childinputdecorator.component';

@Component({
  selector: 'app-parentinputdecorator',
  imports: [ChildinputdecoratorComponent],
  templateUrl: './parentinputdecorator.component.html',
  styleUrl: './parentinputdecorator.component.css'
})
export class ParentinputdecoratorComponent {

  title:string="Hello Form the PARENT COMPONENT"

}
