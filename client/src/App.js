import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHome from "./pages/Admin/AdminHome/AdminHome";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/Home/Navbar/Navbar";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import VolunteerDash from "./pages/VolunteerDash/VolunteerDash";
import VolunteersForm from "./pages/VolunteersForm/VolunteersForm";
export const userContext = React.createContext();
function App() {
  const [volWorkName, setVolWorkName] = useState([]);
  return (
    <userContext.Provider value={setVolWorkName}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login volWorkName={volWorkName} />} />
          <Route element={<PrivateRoute />}>
            <Route
              path="/form/:id"
              element={<VolunteersForm volWorkName={volWorkName} />}
            />
            <Route path="/dashboard" element={<VolunteerDash />} />
            <Route path="/admin/*" element={<AdminHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
