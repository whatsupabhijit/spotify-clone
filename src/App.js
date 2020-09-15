import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { useDataLayerValue } from "./DataLayer";
import { getTokenFromUrl } from "./spotify";

import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("0BjTmuRKZW4eYSIzUQrnlv").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      spotify.getPlaylist("37i9dQZF1DXcBWIGoYBM5M").then((response) => {
        dispatch({
          type: "SET_TODAYS_TOP_HITS",
          discover_today: response,
        });
      });
    }
  }, [user, dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
