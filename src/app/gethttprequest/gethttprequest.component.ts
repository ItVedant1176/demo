import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Data } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // <-- Import this


@Component({
  selector: 'app-gethttprequest',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './gethttprequest.component.html',
  styleUrl: './gethttprequest.component.css'
})
export class GethttprequestComponent  implements OnInit{

  posts:any[]=[];

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data=>{
      this.posts=data;
    })
  }

}
