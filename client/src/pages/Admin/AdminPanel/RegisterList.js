import React, { useEffect, useState } from "react";
import InnerRegisterList from "./InnerRegisterList";

const RegisterList = () => {
  const [totalUser, setTotalUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/user/info/total-user")
      .then((res) => res.json())
      .then((result) => setTotalUser(result));
  }, []);
  console.log(totalUser);
  return (
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto  ">
        <thead>
          <tr className="">
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Name
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Email ID
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Registration Date
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Volunteer List
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {totalUser.map((user) => (
            <tbody>
              <InnerRegisterList key={user.id} user={user} />
            </tbody>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisterList;
