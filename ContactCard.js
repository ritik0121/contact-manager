import React, { useState } from "react";

const ContactCard = (props) => {
  const [showPhone, setShowPhone] = useState(false);

  const togglePhone = () => {
    setShowPhone(!showPhone);
    console.log(showPhone)
  };

  const deleteContact = () => {
    props.clickHandler(props.contact.id);
  };

  return (
    <div className="ui card" onClick={togglePhone}>
      <div className="content">
        <div className="header" style={{color:'white', 'font-size': '24px'}}> Name: {props.contact.name}</div>
        {showPhone && <div className="description" style={{color:'white', 'font-size': '20px'}}>Contact Number: {props.contact.phone}</div>}
      </div>
      <i className="trash alternate outline icon" onClick={deleteContact}></i>

    </div>
  );
};

export default ContactCard;
