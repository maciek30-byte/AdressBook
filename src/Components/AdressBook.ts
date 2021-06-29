import Contact from "./Contact";
import ContactGroup from "./ContactGroup";
import Validator from "./Validator";
import AdressBookInterface from "../interfaces/AdressBookInterface";
import { propertyToChange } from "../Types/AllTypes";

//@ToDo type search Contact by phrase//

class AdressBook implements AdressBookInterface {
  allContactsList: Contact[];
  allGroupOfContactsList: ContactGroup[];

  constructor() {
    this.allContactsList = [];
    this.allGroupOfContactsList = [];
  }

  addContacts(...newContacts: Contact[]): void {
    if (newContacts.length === 0)
      throw new Error("you have to add some contact");
    newContacts.forEach((contact) => {
      if (Validator.checkThatExist(contact, this.allContactsList)) {
        throw new Error("you can not duplicate contact");
      } else {
        this.allContactsList.push(contact);
      }
    });
  }

  deleteContacts(...contactsToDelete: Contact[]) {
    if (contactsToDelete.length === 0) throw new Error("List is empty");
    contactsToDelete.forEach((contact) => {
      this.allContactsList = this.allContactsList.filter(
        (contactF) => contact.getId() !== contactF.getId()
      );
    });
  }

  modifyContact(
    contactToChange: Contact,
    valueToModify: propertyToChange,
    newValue: string
  ) {
    this.allContactsList.find((contact) => {
      if (contact.getId() === contactToChange.getId()) {
        contact.setProperty(valueToModify, newValue);
      } else {
        throw new Error("Contact is not existing in our list");
      }
    });
  }

  //@ToDo TYPE!!!!!!!!!!!!
  searchContact(phrase: string): Contact | void | any {
    if (phrase.length < 2) throw new Error("Contact name is to short");
    const match = this.allContactsList.filter(
      (contact) =>
        contact.getName() === phrase ||
        contact.getSurname() === phrase ||
        contact.getEmail() === phrase
    );
    return match;
  }

  addContactsGroups(...newContactGroups: ContactGroup[]) {
    if (newContactGroups.length === 0) throw new Error("empty");
    // validate that group is allredy exist //
    newContactGroups.forEach((group) => {
      this.allGroupOfContactsList.push(group);
    });
  }

  deleteContactsGroups(...groupsToDelete: ContactGroup[]): void {
    if (groupsToDelete.length === 0) throw new Error("List is empty");
    groupsToDelete.forEach((contact) => {
      this.allGroupOfContactsList = this.allGroupOfContactsList.filter(
        (contactF) => contact.getId() !== contactF.getId()
      );
    });
  }

  updateGroupName(chossenGroup: ContactGroup, newValue: string): void {
    const element = this.allGroupOfContactsList.findIndex(
      (groupInedex) => groupInedex.getId() === chossenGroup.getId()
    );
    if (element === -1) throw new Error("group contact is not exist");
    this.allGroupOfContactsList[element].setGroupName(newValue);
  }
}
