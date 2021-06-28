export interface ContactInterface {
  getName(): string;
  getSurname(): string;
  getEmail(): string     //validation email//
  getCreatedDate(): Date;
  getModificationDate(): Date;
  getId(): string;

  updateModificationDate(): void;
  setProperty(valueToChange:string, newValue:string): void;
}
