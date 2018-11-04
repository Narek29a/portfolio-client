import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class PropertiesService {


  constructor(private http: HttpClient) {

  }

  public getProperty(key:string): Observable<string> {
    return this.http.get('./assets/properties.json').pipe(map((data: string) => {
      return data[key];
    }));
  }



}
