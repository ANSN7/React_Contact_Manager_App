import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");
  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id}></ContactCard>;
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value); // similar to event.target.value
  };

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
      <div className="ui search">
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </>
  );
};

export default ContactList;
