import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(products: any[], ascending: boolean = true): any[] {
    if (!products || products.length <= 1) {
      return products;
    }

    return products.slice().sort((a, b) => {
      if (ascending) {
        return a.price - b.price;
      }else{
        return b.price - a.price;
      }
    });
  }

}
