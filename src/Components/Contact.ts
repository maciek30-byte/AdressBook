import { ContactInterface } from "../interfaces/ContactInterface";
import { v4 as uuidv4 } from "uuid";
import Validator from "./Validator";
//@ToDo test setter function//
type propertyToChange = '_name'| '_surname'| '_email'

class Contact implements ContactInterface {
  private _createdDate: Date;
  private _modificationDate: Date;
  private _uuid: string;

  constructor(
    private _name: string,
    private _surname: string,
    private _email: string
  ) {
    Validator.isWrongEmail(_email);
    this._uuid = uuidv4();
    this._createdDate = new Date();
    this._modificationDate = new Date();
  }
  //
  getName(): string {
    return this._name;
  }
  getSurname(): string {
    return this._surname;
  }
  getEmail(): string {
    return this._email;
  }
  getCreatedDate(): Date {
    return this._createdDate;
  }
  getModificationDate(): Date {
    return this._modificationDate;
  }
  getUuid(): string {
    return this._uuid;
  }

  setProperty(propertyToChange: propertyToChange, newValue: string): void {
    if (propertyToChange === "_email") {
      Validator.isWrongEmail(newValue);
    }
    this[propertyToChange] = newValue;
  }

  updateModificationDate(): void {
    this._modificationDate = new Date();
  }
}

export default Contact;
