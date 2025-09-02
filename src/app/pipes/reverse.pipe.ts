import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(ch: string) {
    // let chinverse = '';
    // for (let i = 0; i < ch.length; i++) {
    //   chinverse = ch[i] + chinverse;
    // }

    return ch.split('').reverse().join('');
  }
}
