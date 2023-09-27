import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const retrieveContacts = localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : [];

  const [contacts, setContacts] = useState(retrieveContacts);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                render={(props) => ({ ...props })}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact
                render={(props) => ({ ...props })}
                addContactHandler={addContactHandler}
              />
            }
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
