import React from "react";
import { Route, Routes } from "react-router-dom";
import RegisterList from "../AdminPanel/RegisterList";
import Sidebar from "../AdminSidebar/Sidebar";

const AdminHome = () => {
  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<RegisterList />} />
      </Routes>
    </div>
  );
};

export default AdminHome;
