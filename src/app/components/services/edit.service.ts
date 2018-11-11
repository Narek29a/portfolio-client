import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {PropertiesService} from './properties.service';
import {ProjectModel} from '../models/project.model';
import {mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable()
export class EditService {

  constructor(private httpClient: HttpClient, private propertyService: PropertiesService) {

  }


  public editProject(projectModel: ProjectModel, contactId):Observable<void> {
    let httpParams: HttpParams = new HttpParams().set('contactId', contactId);
    return this.propertyService.getProperty('edit-project').pipe(mergeMap(url => {
      return this.httpClient.post<void>(url, projectModel, {params: httpParams})
    }));

  }
}
