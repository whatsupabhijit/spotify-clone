import React from "react";
import "../styles/SongRow.css";

import NumberFormat from "react-number-format";

export default function SongRow({ track, occur }) {
  return (
    <div className="songRow">
      <div className="songRow__left">
        <div className="songRow__serialNo">
          {occur < 9 ? "0".concat(occur + 1) : occur + 1}
        </div>

        <div className="songRow__title">
          <img
            className="songRow__albumImage"
            src={track.album.images[0].url}
            alt={track.album.name}
          />
          <div className="songRow__info">
            <h1>{track.name}</h1>
            <p>{track.artists.map((artist) => artist.name).join(",")}</p>
          </div>
        </div>
      </div>

      <div className="songRow__middle">
        <div className="songRow__albumName">
          <p>{track.album.name}</p>
        </div>
      </div>

      <div className="songRow__right">
        <span>
          {parseInt(track.duration_ms * 1.66667e-5)}

          <NumberFormat
            value={(track.duration_ms * 0.001) % 60}
            decimalScale={0}
            allowLeadingZeros={true}
            displayType={"text"}
            isNumericString={true}
            prefix={":"}
          />
        </span>
      </div>
    </div>
  );
}
