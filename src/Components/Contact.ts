import { IContact } from "../interfaces/ContactInterface";
import { v4 as uuidv4 } from "uuid";
import Validator from "./Validator";
import { propertyToChange } from "../Types/AllTypes";

class Contact implements IContact {
  private _id: string;
  name: string;
  surname: string;
  email: string;
  private _createdDate: Date;
  private _modificationDate: Date;

  constructor(name: string, surname: string, email: string) {
    Validator.nameValidation(name);
    Validator.nameValidation(surname);
    Validator.isWrongEmail(email);
    this.name = name;
    this.surname = surname;
    this.email = email;
    this._id = uuidv4();
    this._createdDate = new Date();
    this._modificationDate = new Date();
  }

  get id() {
    return this._id;
  }

  get createdDate() {
    return this._createdDate;
  }

  get modificationDate() {
    return this._modificationDate;
  }

  setProperty(propertyToChange: propertyToChange, newValue: string): void {
    if (propertyToChange === "name" || propertyToChange === "surname") {
      Validator.nameValidation(newValue);
    } else {
      Validator.isWrongEmail(newValue);
    }
    this[propertyToChange] = newValue;
  }
}
export default Contact