import React, { useEffect, useState } from "react";
import InnerVolDash from "./InnerVolDash";

const VolunteerDash = () => {
  const [userInfo, setUserInfo] = useState([]);
  const email = sessionStorage.getItem("email");
  useEffect(() => {
    fetch("http://localhost:5000/api/user/dashboard?email=" + email, {
      headers: {
        headers: {"Content-Type": "application/json"},
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((results) => setUserInfo(results));
  }, []);
  return (
    <div>
      {userInfo.map((user) => (
        <InnerVolDash user={user} key={Math.random()}></InnerVolDash>
      ))}
    </div>
  );
};

export default VolunteerDash;
