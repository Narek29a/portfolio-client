import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EditService} from '../services/edit.service';
import {ViewService} from '../services/view.service';
import {ProjectModel} from '../models/project.model';
import {FormService} from '../services/form.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})


export class EditComponent implements OnInit{


  project: ProjectModel = new ProjectModel();
  contactId: number;
  public errors: Array<string> = [];

  constructor(private route: ActivatedRoute, private editService: EditService, private viewService: ViewService, private formService: FormService) {



  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactId = params['contactId'];
      this.viewService.viewProject(params['contactId']).subscribe((data: ProjectModel) => {
        this.project = data;
      });
    });

  }


  editProject() {
    if (this.formService.validateForm(this.errors, this.project)) {
      this.editService.editProject(this.project, this.contactId).subscribe();
      alert('your project was changed!');

    }
  }




}
