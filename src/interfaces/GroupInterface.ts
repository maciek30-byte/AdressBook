import Contact from "../Components/Contact";

interface ContactGroupInterface {
  id:string
  groupName: string;
  contactGroupList: Contact[] | []; // czy zwaliduje sie ???

  setGroupName(newGroupName: string): void;
  addContactToGroup(newContact: Contact): void| never;
  deleteContact(contactToDelete: Contact): void| never;
  // checkThatExist(contactToCheck: Contact): boolean;
}

export default ContactGroupInterface;
