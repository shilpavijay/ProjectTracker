import "./App.css";
import Login from "./Components/Login";
import Homepg from "./Components/Homepg";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<Homepg />}></Route>
    </Routes>
  );
}

export default App;
