import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse.pipe';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-inbuiltpipes',
  imports: [CommonModule,ReversePipe,TruncatePipe],
  templateUrl: './inbuiltpipes.component.html',
  styleUrl: './inbuiltpipes.component.css'
})
export class InbuiltpipesComponent {

  message:string="IT Vedant";
  amount:number=1234.6789;
  date:string='2025-05-05T11:29:00Z'
  percentageValue:number=0.1234;
}
