import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirective',
  imports: [CommonModule],
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css'
})
export class StructuraldirectiveComponent {

  num:number=8;

  a={id:1,name:"Raj"};

  b=[{id:2,name:"Ram"},{id:3,name:"Ajay"}]

  option=7;

  st1="name"

}
