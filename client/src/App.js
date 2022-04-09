import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import VolunteerDash from "./pages/VolunteerDash/VolunteerDash";
import VolunteersForm from "./pages/VolunteersForm/VolunteersForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/volunteers-form" element={<VolunteersForm />} />
        <Route path="/volunteer" element={<VolunteerDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
