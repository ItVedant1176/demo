import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  getMessage():string{
    return 'Hello Welcome TO ANgular Service!!!!'
  }
}
