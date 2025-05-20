import { CommonModule } from '@angular/common';
import { Component,signal,computed,effect,WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {

  //create signal
  counter=signal(0);

  user=signal({name:'Alice',age:25});

  doubleCounter=computed(()=>this.counter()*2)

  constructor(){
    effect(()=>{
      console.log(`Counter changed to : ${this.counter} `);
    });
  }

  increment(){
    this.counter.update(count=>count+1);
  }
  
  decrement(){
    this.counter.set(this.counter()-1);
  }

  increaseAge(){
    this.user.update(user=>({
      ...user,
      age:user.age+1
    }));
  }

  isEnabled=signal(false);

  toggleFeature(){
    this.isEnabled.set(!this.isEnabled());
  }
  
  theme=signal('light');

  switchTheme(){
    this.theme.set(this.theme()==='light'?'dark':'light')
  }

  items=signal<string[]>(['item 1']);

  addItem(){
    const next =`Item ${this.items().length+1}`;
    this.items.update(list=>[...list,next]);
  }




}
