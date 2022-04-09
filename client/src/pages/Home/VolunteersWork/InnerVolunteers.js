import React from "react";
import { Link } from "react-router-dom";

const InnerVolunteers = (props) => {
  const { name } = props.items;
  return (
    <div>
      <Link to="/volunteers-form">{name}</Link>
    </div>
  );
};

export default InnerVolunteers;
