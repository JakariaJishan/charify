import moment from "moment";
import React from "react";

const InnerRegisterList = (props) => {
  const { Name, email, startDate, org, _id } = props.user;
  const handleDelete = (id) => {
    fetch("http://localhost:5000/api/user/info/delete-user" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    
    alert("success")

  };
  return (
    <div>
      <tr>
        <td className="px-4 py-3">{Name}</td>
        <td className="px-4 py-3">{email}</td>
        <td className="px-4 py-3">{moment(startDate).format("MMM-D-YY")}</td>
        <td className="px-4 py-3">{org}</td>
        <td className="px-4 py-3">
          <button onClick={() => handleDelete(_id)}>delete</button>
        </td>
      </tr>
    </div>
  );
};

export default InnerRegisterList;
