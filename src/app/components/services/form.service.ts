import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PropertiesService} from './properties.service';
import {ProjectModel} from '../models/project.model';
import {isEmpty, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class FormService {

  constructor(private httpClient: HttpClient, private propertyService: PropertiesService) {

  }


  public validateForm(errors: Array<string>, projectModel: ProjectModel): boolean {

    if (projectModel.contact.fName == '' || projectModel.contact.fName == undefined) {
      errors['fNameExistence'] = '* first name is required';
    } else {
      errors['fNameExistence'] = '';
    }
    if (projectModel.contact.lName == '' || projectModel.contact.lName == undefined) {
      errors['lNameExistence'] = '* last name is required';
    } else {
      errors['lNameExistence'] = '';
    }
    if (projectModel.contact.address == '' || projectModel.contact.address == undefined) {
      errors['addressExistence'] = '* address is required';
    } else {
      errors['addressExistence'] = '';
    }
    if (projectModel.contact.position == '' || projectModel.contact.position == undefined) {
      errors['positionExistence'] = '* position is required';
    } else {
      errors['positionExistence'] = '';
    }
    if (projectModel.title == '' || projectModel.title == undefined) {
      errors['titleExistence'] = '* title is required';
    } else {
      errors['titleExistence'] = '';
    }
    if (projectModel.location == '' || projectModel.location == undefined) {
      errors['locationExistence'] = '* location is required';
    } else {
      errors['locationExistence'] = '';
    }
    if (projectModel.description == '' || projectModel.description == undefined) {
      errors['descriptionExistence'] = '* description is required';
    }
    else {
      errors['descriptionExistence'] = '';
    }
    if (projectModel.duration == undefined) {
      errors['durationExistence'] = '* duration is required';
    } else {
      errors['durationExistence'] = '';
    }
    if (projectModel.startDate == undefined) {
      errors['startDateExistence'] = '* start date is required';
    } else {
      errors['startDateExistence'] = '';
    }
    if (projectModel.endDate == undefined) {
      errors['endDateExistence'] = '* end date is required';
    } else {
      errors['endDateExistence'] = '';
    }


    for (let key in errors) {
      if(errors[key] !== '')
        return false;
    }

  return true;

  }

  public setProject(projectModel: ProjectModel):Observable<void> {
    return this.propertyService.getProperty('set-project').pipe(mergeMap(url => {
      return this.httpClient.post<void>(url, projectModel);
    }));

  }



}
