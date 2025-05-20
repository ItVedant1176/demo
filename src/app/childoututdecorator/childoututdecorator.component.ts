import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childoututdecorator',
  imports: [],
  templateUrl: './childoututdecorator.component.html',
  styleUrl: './childoututdecorator.component.css'
})
export class ChildoututdecoratorComponent {

  @Output() eventClicked=new EventEmitter<string>();

  onButtonClick(){
    this.eventClicked.emit("Hello From The Child Component");
  }

}
