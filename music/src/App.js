import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Mainpage from "./Pages/Mainpage";
import { useSelector } from "react-redux";
import axios from "axios";
import SpotifyPlayer from "react-spotify-web-playback";
import { authActions } from "./slice.js";
import { useDispatch } from "react-redux";
const code = new URLSearchParams(window.location.search).get("code");
// console.log(code);
// let m;
function App() {
  const [play, setPlay] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();
  const dispatch = useDispatch();
  const uri = useSelector((state) => state.counter.uri);
  // console.log(uri);
  useEffect(() => {
    axios.post("http://localhost:3001/login", { code }).then((res) => {
      setAccessToken(res.data.accessToken);
      setRefreshToken(res.data.refreshToken);
      setExpiresIn(res.data.expiresIn);
      dispatch(authActions.update({ user: res.data.accessToken }));
      window.history.pushState({}, null, "/");
    });
  }, [code]);
  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const timeout = setTimeout(() => {
      axios
        .post("http://localhost:3001/refresh", { refreshToken })
        .then((res) => {
          // console.log(res.data);
          setAccessToken(res.data.accessToken);
          // setRefreshToken(res.data.refreshToken);
          setExpiresIn(res.data.expiresIn);
          // window.history.pushState({}, null, "/");
          dispatch(authActions.update({ user: res.data.accessToken }));
        })
        .catch((e) => {
          console.log(e);
        });
    }, (expiresIn - 60) * 1000);
    return () => clearTimeout(timeout);
  }, [refreshToken, expiresIn]);

  useEffect(() => {
    setPlay(true);
  }, [uri]);
  return (
    <div className="App">
      {!accessToken && localStorage.getItem("user") == "false" ? (
        <Login />
      ) : (
        <React.Fragment>
          <Mainpage />
          <SpotifyPlayer
            token={accessToken}
            uris={uri ? [uri] : []}
            className="player"
            magnifySliderOnHover="true"
            callback={(state) => {
              if (!state.isPlaying) setPlay(false);
            }}
            styles={{
              bgColor: "#fff",
              sliderHandleColor: "green",
            }}
            play={play}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
