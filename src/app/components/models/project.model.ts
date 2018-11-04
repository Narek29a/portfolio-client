import {ContactModel} from './contact.model';

export class ProjectModel {

  public id: number;
  public contact: ContactModel = new ContactModel();
  public title: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;
  public duration: number;
  public location: string;

/*
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }



  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get contact(): ContactModel {
    return this._contact;
  }

  set contact(value: ContactModel) {
    this._contact = value;
  }*/
}
