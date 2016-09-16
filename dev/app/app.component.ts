import {Component} from 'angular2/core';
import {geoGramJS} from "../geoGram.service";

@Component({
    selector: 'my-app',
    template: `
    <header>
        <h1>geoGramJS</h1>
    </header>
    <body>
    // <form>

    // ng model on input reference controller
      <input type="text" [(ngModel)]="app.location"/>

      <button (click)="getData(app)">Submit</button>
    // </form>
    </body>
`,

    providers: [geoGramJS]
})

export class AppComponent {
constructor(private _geoGramJS: geoGramJS) { }

  public app ={};

  public getData = (app)=>{
      console.log("foooooo");
      console.log("test", this._geoGramJS.getLocationItems());

    console.log(app.location);
  }
}
