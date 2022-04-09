import React from "react";
import { Link } from "react-router-dom";

const InnerVolunteers = (props) => {
  const { name, img } = props.items;
  
  return (
    <div>
      <Link to ={`/form/${name}`} onClick={() => sessionStorage.setItem('volWorkName', name)}>
        <div >
          <img src={img} width="100%" alt={name}/>
          <p>{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default InnerVolunteers;
