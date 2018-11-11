import {Component} from '@angular/core';
import {ProjectModel} from '../models/project.model';
import {FormService} from '../services/form.service';


@Component({
  selector: 'form-page',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})


export class FormComponent {

  public project: ProjectModel = new ProjectModel();
  public errors: Array<string> = [];
  constructor(private formService: FormService) {

  }



  public setProject() {
    if (this.formService.validateForm(this.errors, this.project)) {

      this.formService.setProject(this.project).subscribe();
      alert('your project was created');

    }

  }




}
