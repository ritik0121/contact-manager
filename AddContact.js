import React, { useState } from "react";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState('+91 ');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || phone === "") {
      alert("All fields are mandatory!");
      return;
    }
    props.addContactHandler({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <div className="ui main">
      <h2 style={{ color: "#7028e4",'font-size':'26px'}}>Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label style={{'font-size':'20px'}}>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label style={{'font-size':'20px'}}>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            minLength="10"
            maxLength="10" 

          />
        </div>
        <button className="ui button purple">Add</button>

  
      </form>
    </div>
  );
};

export default AddContact;
