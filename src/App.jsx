import { useState } from "react";
import AddAccount from "./components/AddAccount";
import ContactManagement from "./components/Manage/ContactManagement";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const startEditContact = (contact) => {
    setEditContact(contact);
  };

  const updateContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setEditContact(null);
  };

  return (
    <div className="flex md:justify-around justify-center md:items-start items-center mt-5 gap-3 mx-3 flex-col-reverse md:flex-row ">
      <div className="w-full">
        <ContactManagement
          contacts={contacts}
          deleteContact={deleteContact}
          startEditContact={startEditContact}
        />
      </div>
      <div className="w-1/3 flex justify-center">
        <AddAccount
          addContact={addContact}
          editContact={editContact}
          updateContact={updateContact}
        />
      </div>
    </div>
  );
};

export default App;
