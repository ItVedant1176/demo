import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bindings',
  imports: [FormsModule],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {

  //1. string interpolation
  username:string="KArtiki"
  expereince:number=8
  city:string="Pune"


  getGreeting():string{
    return `Hello ,${this.username} , Welcome To ${this.city}`;
  }

  //2. Property Binding
  pqr="b.jpg"

  //3. Event Binding
  clickCount:number=0;

  onClick():void{
    this.clickCount++;
    console.log(`Button is Clicked ${this.clickCount} times`);
  }

  onReset():void{
    this.clickCount=0;
    console.log("Counter was RESET");
  }

  //4. Two Way Binding
  user:string="Ram"
  age:number=20
}
