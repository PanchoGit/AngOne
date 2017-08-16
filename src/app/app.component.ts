import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Project {{name}}</h1>`,
})
export class AppComponent  { name = 'AngOne'; }
