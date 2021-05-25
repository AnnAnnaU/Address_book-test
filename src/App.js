import React, { useState } from 'react'
import useLocalStorage from "use-local-storage";
import { ContactList } from './components/ContactList';
import { AddContact } from './components/AddContact';
import { EditContact } from './components/EditContact';
import './App.css'

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    name: '',
    surname: '',
    phone: '',
    email: '',
    address: '',
  };

  const [currentContact, setCurrentContact] = useState(initialFormState);

  const addContact = (newContact) => {
    newContact.id = +new Date();
    setContacts([...contacts, newContact]);
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(user => user.id !== id));
  }

  const updateContact = (id, updatedContact) => {
    setEditing(false)
    setContacts(contacts.map(contact => (contact.id === id ? updatedContact : contact)))
  }

  const editContactRow = (contact) => {
    setEditing(true)
    const { id, name, surname, phone, email, address } = contact;
    setCurrentContact({
      id: id,
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      address: address
    });
  }

  return (
    <div className="container">
      <h1>Address book</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit contact</h2>
              <EditContact
                editing={editing}
                setEditing={setEditing}
                currentContact={currentContact}
                updateContact={updateContact}
              />
            </div>
          ) : (
            <div>
              <h2>Add contact</h2>
              <AddContact
                addContact={addContact}
                initialFormState={initialFormState}
              />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View contacts</h2>
          <ContactList contacts={contacts} editContactRow={editContactRow} deleteContact={deleteContact} />
        </div>
      </div>
    </div>
  )
}

export default App;