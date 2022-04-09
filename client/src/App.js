import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import VolunteerDash from "./pages/VolunteerDash/VolunteerDash";
import VolunteersForm from "./pages/VolunteersForm/VolunteersForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/form/:id" element={<VolunteersForm />} />
          <Route path="/dashboard" element={<VolunteerDash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
