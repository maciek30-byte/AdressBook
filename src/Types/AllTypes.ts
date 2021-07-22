import Contact from "../Components/Contact";
import ContactGroup from "../Components/ContactGroup";

export type propertyToChange = 'name'| 'surname'| 'email';
export type ArrayToChecked = Contact[] | ContactGroup[] | Array<Contact> | Array<ContactGroup>
