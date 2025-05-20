import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-service-exaample',
  imports: [],
  templateUrl: './service-exaample.component.html',
  styleUrl: './service-exaample.component.css'
})
export class ServiceExaampleComponent implements OnInit {
  message :string="";

  constructor(private myService:MyServiceService){

  }
  ngOnInit(): void {
    this.message=this.myService.getMessage();
  }
}
