import React from "react";
import { Link, useParams } from "react-router-dom";
import user from "../images/user.png";

const ConfirmDelete = (props) => {
  const { id } = useParams();
  return (
    <div className="main" style={{ marginTop: "50px" }}>
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">Confirm Delete</div>
          <div className="description">
            Are you sure you want to delete this?
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to="/">
          <button className="ui button blue">Cancel</button>
        </Link>
        <Link to="/">
          <button
            onClick={() => props.getContactId(id)}
            className="ui button red"
          >
            Delete Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmDelete;
