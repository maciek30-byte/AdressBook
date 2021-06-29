import Contact from "../Components/Contact";
import ContactGroup from "../Components/ContactGroup";
import { propertyToChange } from "../Types/AllTypes";

interface AdressBookInterface {
  allContactsList: Contact[];
  allGroupOfContactsList: ContactGroup[];

  searchContact(phrase: string): Contact | void | any; // szuka tylko w all Contacts ?
  addContacts(...newContacts: Contact[]): void;
  deleteContacts(...contactsToDelete: Contact[]): void;
  modifyContact(
    contact: Contact,
    valueToModify: propertyToChange,
    newValue: string
  ): void;

  addContactsGroups(...newContactGroups: ContactGroup[]): void;
  deleteContactsGroups(...groupsToDelete: []): void;

}

export default AdressBookInterface;
