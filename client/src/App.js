import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import VolunteerDash from "./pages/VolunteerDash/VolunteerDash";
import VolunteersForm from "./pages/VolunteersForm/VolunteersForm";
export const userContext = React.createContext();
function App() {
  const [volWorkName, setVolWorkName] = useState();
  return (
    <userContext.Provider value={setVolWorkName}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login volWorkName={volWorkName}  />} />
          <Route element={<PrivateRoute />}>
            <Route path="/form/:id" element={<VolunteersForm  />} />
            <Route path="/dashboard" element={<VolunteerDash />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
