import {Component} from 'angular2/core';
import {Google} from "../google.service";

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

    providers: [Google]
})

export class AppComponent {
constructor(private _google: Google) { }

  public app ={};

  public getData = (app)=>{
      console.log("foooooo");
      console.log("test", this._google.getLocationFromString("disneyland,ca"));

    console.log(app.location);
  }
}
