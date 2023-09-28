import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id}></ContactCard>;
  });
  return (
    <>
      <h2 style={{ marginTop: "50px" }}>
        Contact List
        <Link to="/add">
          <button style={{ float: "right" }} className="ui button blue right">
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </>
  );
};

export default ContactList;
