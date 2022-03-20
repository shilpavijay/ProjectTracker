import React from "react";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import "./sidebar.css";

function Sidebar() {
  return (
    <div>
      <div class="sidebar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Sidebar;
