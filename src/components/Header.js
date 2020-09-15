import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

export default function Header() {
  const [{ user }] = useDataLayerValue();
  return (
    <nav className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Postcasts"
        />
      </div>
      <div className="header__right">
        <Avatar
          className="header__avatar"
          src={user?.images[0]?.url}
          alt={user?.display_name}
        />
        <h5>{user?.display_name}</h5>
      </div>
    </nav>
  );
}
