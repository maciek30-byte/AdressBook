import Contact from "../Components/Contact";
import ContactGroup from "../Components/ContactGroup";
import { propertyToChange } from "../Types/AllTypes";

interface AdressBookInterface {
  allContactsList: Contact[];
  allGroupOfContactsList: ContactGroup[];

  searchByPhrase(phrase: string): Contact | void | any;
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
