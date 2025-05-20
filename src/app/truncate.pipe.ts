import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string,length:number=5): string {
    if(!value) return value; // empty --> empty
    if(value.length<=length) //length<=given length
      return value
      return value.substring(0,length)+'....'
   
  }

}
