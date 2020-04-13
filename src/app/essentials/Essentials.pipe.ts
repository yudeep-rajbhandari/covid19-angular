import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'essentialFilter'
})
export class Essentials implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.arraylocation.toString().toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase()));
      return rVal;
      })

  }

}
