import {Injectable} from "angular2/core";
// import {LOCATION} from "./location.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx';
@Injectable()
export class geoGramJS {

    constructor(private _http: Http) { }

    getLocationItems() {
        return "hello";
    }


    searchLocationData(cityName: string): Observable<any> {
        return this._http.get('http://maps.googeapis.com/maps/api/geocode/json?address=' + cityName + '&APPID=90a335d103bc0c34332a9b97640be0ec&units=metric')
          .map(response => response.json())
              .catch(error => {
                  console.error(error);
                  return Observable.throw(error.json())
            });
    }
}
