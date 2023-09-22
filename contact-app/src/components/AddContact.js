import React from "react";

const divStyle = {
  marginTop: "50px",
};

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main" style={divStyle}>
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
