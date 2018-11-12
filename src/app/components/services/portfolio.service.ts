import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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

  public sortingByLocation(location:string) {
    let httpParams: HttpParams = new HttpParams().set('location',location);
    return this.propertyService.getProperty('sortingByLocation').pipe(mergeMap(url =>
    {
      return this.http.post<Array<ProjectModel>>(url, null, {params:httpParams});
    }));
  }


}
