import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../services/portfolio.service';
import {ProjectModel} from '../models/project.model';
import {Router} from '@angular/router';
import {ViewService} from '../services/view.service';


@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})


export class PortfolioComponent implements OnInit {


  public projects: Array<ProjectModel> = [];


  constructor(private portfolioService: PortfolioService, private router: Router, private viewService: ViewService) {

  }

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe((data: Array<ProjectModel>) => {
      this.projects = data;
    });

  }


  public viewProject(contactId: number) {
    this.router.navigate(['/view/' +  contactId]);
  }


  public sortingByLocation(location) {
    this.portfolioService.sortingByLocation(location).subscribe((data: Array<ProjectModel>) => {
      this.projects = data;
    });

  }




}

