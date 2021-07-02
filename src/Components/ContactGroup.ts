import GroupInterface from "../interfaces/GroupInterface";
import ContactGroupInterface from "../interfaces/GroupInterface";
import Contact from "./Contact";
import { v4 as uuidv4 } from "uuid";
import Validator from "./Validator";

type result = {
  status:boolean
  message:string
}

class ContactGroup implements ContactGroupInterface {
  private _id: string;
  contactGroupList: Contact[]; // typ zarowno tablica kontaktow jak i pusta tablica //

  constructor(public groupName: string) {
    this._id = uuidv4();
    this.contactGroupList = [];
  }
  getId(): string {
    return this._id;
  }
  setGroupName(newGroupName: string) {
    Validator.isEmptyStringValue(newGroupName)
    this.groupName = newGroupName;
  }


  addContactToGroup(newContact: Contact): result | never {
    if (Validator.checkThatExist(newContact,this.contactGroupList)) {
      throw new Error("you duplicate contact");
    }

    // co sie dzieje jeśli jest duplikat

    this.contactGroupList.push(newContact);


    return {
      status:true,
      message:'Contact was added'
    }
  }
  deleteContact(contactToDelete: Contact): Contact[] {
    // co sie dzieje jeśli jest duplikat

    // .findIndex + .splice

    const result = this.contactGroupList.filter(
      (contact) => contact.getId() !== contactToDelete.getId()
    );
    return result;
  }
}

export default ContactGroup
