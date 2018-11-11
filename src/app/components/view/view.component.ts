import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewService} from '../services/view.service';
import {ProjectModel} from '../models/project.model';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})


export class ViewComponent implements OnInit{

  projectModel: ProjectModel = new ProjectModel();

  constructor(private route: ActivatedRoute, private viewService:ViewService,  private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.viewService.viewProject(params['contactId']).subscribe((data: ProjectModel) => {
        this.projectModel = data;
      });
    });
  }


  public editProject(contactId: number) {
    this.router.navigate(['/edit/' +  contactId]);

  }



}
