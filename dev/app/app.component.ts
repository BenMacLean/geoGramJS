import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
  public app ={};

  public getData = (app)=>{

    console.log(app.location);
  }
}
