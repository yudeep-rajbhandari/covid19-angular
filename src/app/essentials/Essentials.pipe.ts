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
      debugger;
      let rVal = (val.Category.includes(args.toLocaleString()));
      return rVal;
    });

  }

}
