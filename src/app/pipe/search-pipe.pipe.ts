import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false,
})
export class SearchPipe implements PipeTransform {

  transform(value: any, inputString: string) {
    if (!value) return null;
    if (!inputString) return value;
    inputString = inputString.toLowerCase();
    console.log(value)
    return value.filter(function (item: any) {
      return JSON.stringify(item.companyname).toLowerCase().includes(inputString);
    });
  }

}
