import React, { useEffect, useRef, useState } from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../DataLayer";

export default function Header() {
  const [{ user }] = useDataLayerValue();
  const [headerSticker, setHeaderSticker] = useState("header");
  const bodyHeaderRef = useRef();

  const listenScrollEvent = (event) => {
    var headerTop = bodyHeaderRef.current.getBoundingClientRect().top;
    // console.log(" header tops are:");
    // console.log(headerTop);
    if (headerTop < 0) {
      return setHeaderSticker("header header__sticky");
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", listenScrollEvent);
    return () => window.removeEventListener("wheel", listenScrollEvent);
  }, []);

  return (
    <div ref={bodyHeaderRef} className={headerSticker}>
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
    </div>
  );
}
