import React, { useEffect, useState } from "react";
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

  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    console.log(event);
    if (window.scrollY < 60) {
      return setHeader("header");
    } else if (window.scrollY >= 60) {
      return setHeader("header2");
    }
    console.log(header);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    // return () => window.removeEventListener("scroll", listenScrollEvent);
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

        <div className="body__tablesticky {header}">
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
