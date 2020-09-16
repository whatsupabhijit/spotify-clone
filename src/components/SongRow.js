import React from "react";
import "../styles/SongRow.css";

export default function SongRow({ track, occur }) {
  return (
    <div className="songRow">
      {occur + 1}
      <img
        className="songRow__albumImage"
        src={track.album.images[0].url}
        alt={track.album.name}
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(",")}</p>
      </div>

      <div className="songRow__albumName">
        <p>{track.album.name}</p>
      </div>

      <div className="songRow__duration">
        <span>
          {track.duration_ms * 1.66667e-5} : {track.duration_ms * 0.001}{" "}
        </span>
      </div>
      {console.log(track)}
    </div>
  );
}
