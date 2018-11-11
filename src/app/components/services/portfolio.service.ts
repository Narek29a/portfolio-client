import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PropertiesService} from './properties.service';
import {Observable} from 'rxjs';
import {ProjectModel} from '../models/project.model';
import {mergeMap} from 'rxjs/operators';


@Injectable()
export class PortfolioService {


  constructor(private http: HttpClient, private propertyService: PropertiesService) {

  }


  public getProjects():Observable<Array<ProjectModel>> {
   return this.propertyService.getProperty('get-projects').pipe(mergeMap(url =>
    {
      return this.http.post<Array<ProjectModel>>(url, null);
    }));


  }


}
