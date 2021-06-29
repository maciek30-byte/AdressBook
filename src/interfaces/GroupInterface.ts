import Contact from "../Components/Contact";

interface ContactGroupInterface {
  getId(): string;
  groupName: string;
  contactGroupList: Contact[] | []; // czy zwaliduje sie ???

  setGroupName(newGroupName: string): void;
  addContactToGroup(newContact: Contact): void; // zwaliduje ???
  deleteContact(contactToDelete: Contact): void;
  // checkThatExist(contactToCheck: Contact): boolean;
}

export default ContactGroupInterface;
