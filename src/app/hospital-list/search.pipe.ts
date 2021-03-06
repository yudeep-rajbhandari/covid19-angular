import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'hospitalFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.district_name.toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase())) || (val.name.toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase())) ||  (val.category_name.toLocaleLowerCase().includes(args.toLocaleString().toLocaleLowerCase()));
      return rVal;
    })

  }

}
