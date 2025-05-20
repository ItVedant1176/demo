import { Component } from '@angular/core';
import { ChildoututdecoratorComponent } from '../childoututdecorator/childoututdecorator.component';

@Component({
  selector: 'app-parentoutputdecorator',
  imports: [ChildoututdecoratorComponent],
  templateUrl: './parentoutputdecorator.component.html',
  styleUrl: './parentoutputdecorator.component.css'
})
export class ParentoutputdecoratorComponent {

  messageFromChild:string="";

  handleEventFromChild(message:string){
    this.messageFromChild=message;
  }

}
