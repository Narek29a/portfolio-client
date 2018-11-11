import {Injectable} from '@angular/core';
import {PropertiesService} from './properties.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProjectModel} from '../models/project.model';
import {mergeMap} from 'rxjs/operators';


@Injectable()
export class ViewService {


  constructor(private propService: PropertiesService, private http: HttpClient) {


  }

  public viewProject(contactId):Observable<ProjectModel> {

    return this.propService.getProperty('view-project').pipe(mergeMap(url => {
      let httpParams: HttpParams = new HttpParams().set('contactId', contactId);
      return this.http.post<ProjectModel>(url, null, {params: httpParams});
    }));
  }


}



