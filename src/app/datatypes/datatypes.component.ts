import { Component } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  imports: [],
  templateUrl: './datatypes.component.html',
  styleUrl: './datatypes.component.css'
})
export class DatatypesComponent {

  //string
  name:string="IT Vedant"

  //number
  num:number=20

  //string array 
  hobbies:string[]=["Reading","Dancing","Painting"]

  //array
  address:[string,number]=['Pune',20]

  //json object
  person:{namee:string,age:number}={namee:"Ram",age:25}
}
