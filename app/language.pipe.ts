/**
 * Created by Mig on 4/27/2016.
 */


import {Pipe} from 'angular2/core'


@Pipe({
  name: "locale"
})

export class LanguagePipe {

  transform(value) {

    //return value;
    //  return "HI";

    return value['he'];

  }

}

