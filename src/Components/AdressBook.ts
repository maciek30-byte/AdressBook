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

  addContacts(...newContacts: Contact[]): void | never {
    if (newContacts.length === 0)
      throw new Error("you have to add anything to  contact");
    newContacts.forEach((contact) => {
      if (Validator.checkThatExist(contact, this.allContactsList)) {
        throw new Error("you can not duplicate contact");
      } else {
        this.allContactsList.push(contact);
      }
    });
  }

  deleteContacts(...contactsToDelete: Contact[]): void | never {
    if (contactsToDelete.length === 0) throw new Error("List is empty");
    contactsToDelete.forEach((contact) => {
      const deletedContact: Contact | undefined = this.allContactsList.find(
        (contactF) => contact.id !== contactF.id
      );
      if (deletedContact === undefined)
        throw new Error("We can not find Contact");
      this.allContactsList.filter(
        (contact) => contact.id !== deletedContact.id
      );
      this.deleteSingleContactFromGroup(deletedContact);
    });
  }

  private deleteSingleContactFromGroup(contactToDelete: Contact) {
    this.allGroupOfContactsList.filter((group) =>
      group.deleteContact(contactToDelete)
    );
  }

  searchByPhrase(phrase: string): Contact[] {
    Validator.isEmptyStringValue(phrase);
    return this.allContactsList.filter((contact) =>
      contact.isIncludesPhrase(phrase)
    );
  }

  modifyContact(
    contactToModify: Contact,
    propertyToChange: propertyToChange,
    newValue: string
  ): void | never {
    const modified: Contact | undefined = this.allContactsList.find(
      (contact) => contact.id === contactToModify.id
    );
    if (modified === undefined) throw new Error("Contact not found");
    modified.setProperty(propertyToChange, newValue);
  }

  addContactsGroups(...newContactGroups: ContactGroup[]) {
    if (newContactGroups.length === 0) throw new Error("empty");
    newContactGroups.forEach((group) => {
      if (Validator.checkThatGroupExist(group, this.allGroupOfContactsList))
        throw new Error("Group is existing allredy");
      this.allGroupOfContactsList.push(group);
    });
  }

  deleteContactsGroups(...groupsToDelete: ContactGroup[]): void {
    if (groupsToDelete.length === 0) throw new Error("List is empty");
    groupsToDelete.forEach((group) => {
      if (!Validator.checkThatGroupExist(group, this.allGroupOfContactsList))
        throw new Error("Contact is not exist in a list");
      this.allGroupOfContactsList = this.allGroupOfContactsList.filter(
        (groupF) => groupF.id !== group.id
      );
    });
  }

  updateGroupName(chossenGroup: ContactGroup, newValue: string): void {
    const element = this.allGroupOfContactsList.findIndex(
      (groupInedex) => groupInedex.id === chossenGroup.id
    );
    if (element === -1) throw new Error("group contact is not exist");
    this.allGroupOfContactsList[element].setGroupName(newValue);
  }
}

export default AdressBook
