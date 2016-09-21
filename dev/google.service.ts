import {Injectable} from "angular2/core";
// import {LOCATION} from "./location.data";
import {Observable} from "rxjs/Observable";
import {Http} from "angular2/http";
import 'rxjs/Rx';
@Injectable()
export class Google {

    constructor(private _http: Http) { }

    getLocationItems() {
        return "hello";
    }


    getLocationFromString(cityName: string): Observable<any> {
        return this._http.get('http://maps.googeapis.com/maps/api/geocode/json?address=' + cityName)
          .map(response => response.json())
              .catch(error => {
                  console.error(error);
                  return Observable.throw(error.json())
            });
    }
}
