export class ContactModels {

  private _id: number;
  private _fName: string;
  private _lName: string;
  private _address: string;
  private _position: string;


  set id(value: number) {
    this._id = value;
  }

  set fName(value: string) {
    this._fName = value;
  }

  set lName(value: string) {
    this._lName = value;
  }

  set address(value: string) {
    this._address = value;
  }

  set position(value: string) {
    this._position = value;
  }

  get id(): number {
    return this._id;
  }

  get fName(): string {
    return this._fName;
  }

  get lName(): string {
    return this._lName;
  }

  get address(): string {
    return this._address;
  }

  get position(): string {
    return this._position;
  }
}
