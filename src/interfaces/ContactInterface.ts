export interface ContactInterface {
  getName(): string;
  getSurname(): string;
  getEmail(): string     //validation email//
  getCreatedDate(): Date;
  getModificationDate(): Date;
  getUuid(): string;

  updateModificationDate(): void;
  setProperty(valueToChange:string, newValue:string): void;
}
