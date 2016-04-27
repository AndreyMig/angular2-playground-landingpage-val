import {Component} from 'angular2/core';
import {LanguagePipe} from "./language.pipe";

@Component({
    selector: 'my-app',
    template: '<h1>{{title | locale}}</h1>',
    pipes: [LanguagePipe]
})
export class AppComponent {


  title = {
    "en": "HELLO",
    "he": "שלום"
  }



}
