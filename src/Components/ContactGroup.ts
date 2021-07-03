import GroupInterface from "../interfaces/GroupInterface";
import ContactGroupInterface from "../interfaces/GroupInterface";
import Contact from "./Contact";
import { v4 as uuidv4 } from "uuid";
import Validator from "./Validator";
import { throws } from "assert";

// type result = {
//   status: boolean;
//   message: string;
// };

class ContactGroup implements ContactGroupInterface {
  private _id: string;
  groupName: string;
  contactGroupList: Contact[];

  constructor(groupName: string) {
    Validator.nameValidation(groupName);
    this.groupName = groupName;
    this._id = uuidv4();
    this.contactGroupList = [];
  }
  get id() {
    return this._id;
  }
  setGroupName(newGroupName: string):void {
    Validator.nameValidation(newGroupName);
    this.groupName = newGroupName;
  }

  addContactToGroup(newContact: Contact): void | never {
    if (Validator.checkThatExist(newContact, this.contactGroupList)) {
      throw new Error("you duplicate contact");
    }
    this.contactGroupList.push(newContact);

    // return {
    //   status: true,
    //   message: "Contact was added",
    // };
  }
  deleteContact(contactToDelete: Contact): Contact[] | never {
    Validator.checkThatExist(contactToDelete, this.contactGroupList);
    const result: number = this.contactGroupList.findIndex(
      (contact) => contact.id === contactToDelete.id
    );
    if (result === -1) {
      throw new Error("Contact is not exist in list");
    } else {
      return (this.contactGroupList = this.contactGroupList.splice(result, 1));
    }
  }

}

export default ContactGroup;
