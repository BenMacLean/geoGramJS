import {Component} from 'angular2/core';



@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>geoGramJS</h1>
        </header>
        <body>
        // <form>

        // ng model on input reference controller
          <input type="text" [(ngModel)]="input"/>

          <button (click)="getData(input)">Submit</button>
        // </form>
        </body>
    `,
})



export class AppComponent {
  public input;

  public getData = (input)=>{

    console.log(input);
  }
}
