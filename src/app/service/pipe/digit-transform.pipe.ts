import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'digitTransform'
})
export class DigitTransformPipe  implements PipeTransform {
  private currentLang!:string;
  constructor(private translation:TranslateService){
this.currentLang = this.translation.currentLang
  }

  numbersObject: { [x: string]: string } = {
    '1': '١',
    '2': '٢',
    '3': '٣',
    '4': '٤',
    '5': '٥',
    '6': '٦',
    '7': '٧',
    '8': '٨',
    '9': '٩',
    '0': '٠',
  };
  transform(n: string): string {
    console.log(this.currentLang);

    if (n === null || n === undefined) return '';
    n = n + ''; // to make it a string if it was a number
    let newString = '';
    for (let i = 0; i < n.length; i++) {
      if (this.numbersObject[n.charAt(i)])
        newString += this.numbersObject[n.charAt(i)];
      else
        newString += n.charAt(i);
    }

    return newString;
  }
  }

