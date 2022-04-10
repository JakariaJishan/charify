import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";

const InnerVolunteers = (props) => {
  const { name, img } = props.items;
  const setVolWorkName = useContext(userContext);
  return (
    <div>
      <Link to ={`/form/${name}`} onClick={() => setVolWorkName(name)} >
        <div >
          <img src={img} width="100%" alt={name}/>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default InnerVolunteers;
