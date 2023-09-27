import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatpip'
})
export class ConcatpipPipe implements PipeTransform {

  transform(firstname:any, lastname:any): any {
    return firstname+lastname;
  }

}
