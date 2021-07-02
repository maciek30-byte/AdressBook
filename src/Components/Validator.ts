import Contact from "./Contact";


class Validator {
  static isWrongEmail(email: string): void| never {
    if (email.length === 0) throw new Error("write minimum 1 characters");
    const re: RegExp =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email))
      throw new Error(
        'Email must be a letter and must contain between 3-25 characters, and must have special characters "@"'
      );

  }
  static isEmptyStringValue(stringValue: string):void | never {
    if (stringValue.length === 0) {
      throw new Error(" you set empty value");
    }
  }

  static nameValidation(nameToValidate:string):void|never{
      const regExp =  /^[a-zA-Z]+ [a-zA-Z]+$/
      if(!regExp.test(nameToValidate)) throw new Error('It is not correct name')
  }

  static  checkThatExist(contactToCheck: Contact, checkedList:Contact[]): boolean {
      const checked = checkedList.some(
          (contact) => contact.getId() === contactToCheck.getId()
      );
      checked
          ? console.log("contact is exist")
          : console.log("contact is not exist on this group");
      return checked;
  }
}
export default Validator;
