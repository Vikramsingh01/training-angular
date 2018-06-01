import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, args?: any, arg2?: any): any {
    if(args){
      return value+(value*args)+arg2
    }
    return value+(value*0.18)+20;
  }

}
