import React from "react";
import "../styles/SidebarOption.css";

export default function SideBarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h5>{title}</h5> : <p>{title}</p>}
    </div>
  );
}
