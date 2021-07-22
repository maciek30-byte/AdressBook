export interface IContact {
  name: string;
  surname: string;
  email: string;
  createdDate: Date;
  modificationDate: Date;

  setProperty(valueToChange: string, newValue: string): void;
}
