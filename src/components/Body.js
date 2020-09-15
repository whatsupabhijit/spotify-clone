import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "../styles/Body.css";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";

export default function Body({ spotify }) {
  // const [{ discover_weekly }] = useDataLayerValue();

  const [{ discover_today }] = useDataLayerValue();

  const [header, setHeader] = useState("body__tablesticky header");

  const stickyRef = useRef();

  const listenScrollEvent = (event) => {
    // console.log(event.clientX, event.clientY);
    console.log(
      stickyRef.current.offsetTop,
      window.pageYOffset,
      window.innerHeight
    );

    var rect = stickyRef.current.getBoundingClientRect().top;
    console.log(rect);

    if (stickyRef.current.getBoundingClientRect().top > 256) {
      return setHeader("body__tablesticky header");
    } else {
      return setHeader("body__tablesticky header2");
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", listenScrollEvent);
    return () => window.removeEventListener("wheel", listenScrollEvent);
  }, []);

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_today?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h1>Today's Top Hits</h1>
          <p>{discover_today?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        <div ref={stickyRef} className={header}>
          <div className="body__tableheader ">
            <div className="body__tableColumnLeft">
              <span>#</span>
              <span className="body__tableColumnTitle">TITLE</span>
            </div>
            <div className="body__tableColumnRight">
              <span className="body__tableColumnThree">ALBUM</span>
            </div>
            <AccessTimeOutlinedIcon className="body__tableColumnFour" />
          </div>
          <hr className="body__hr" />
        </div>

        {discover_today?.tracks.items.map((item, i) => (
          <SongRow key={i} track={item.track} />
        ))}
      </div>
    </div>
  );
}
