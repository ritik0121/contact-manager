import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const deleteContact = (id) => {
    props.getContactId(id);
  };
  console.log(props.contacts)

  const renderContactList = props.contacts.map((contact) => {
   
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        clickHandler={deleteContact}
      />
    );
  });

  return <div className="ui celled list container">{renderContactList}</div>;

};

export default ContactList;
