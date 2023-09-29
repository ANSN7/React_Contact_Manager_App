import React from "react";
import { Navigate } from "react-router-dom";
import withRouter from "./Wrapper";

const divStyle = {
  marginTop: "50px",
};

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = this.props.router.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  submitted = false;
  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.submitted = true;
  };

  render() {
    return (
      <div className="ui main" style={divStyle}>
        <h2>Edit Contact</h2>
        {this.submitted && <Navigate to="/" replace={true} />}
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default withRouter(EditContact);
