import styles from "./Mainpage.module.css";
import "./style.css";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar.js";
import ContentTrack from "./ContentTrack.js";
import ContentAll from "./ContentAll.js";
import ContentAlbum from "./ContentAlbum.js";
import ContentPlaylist from "./ContentPlaylist.js";
import ContentArtist from "./ContentArtist.js";
function Mainpage() {
  const accesscode = useSelector((state) => state.counter.user);
  const [query, onquery] = useState("popular");
  const [data, ondata] = useState();
  const [focus, onfocus] = useState(false);
  const micro = useRef();
  const all = useRef();
  const songs = useRef();
  const play = useRef();
  const album = useRef();
  const artist = useRef();
  const [allselect, onallselect] = useState(true);
  const [songsselect, onsongsselect] = useState(false);
  const [playselect, onplayselect] = useState(false);
  const [alselect, onalselect] = useState(false);
  const [aselect, onaselect] = useState(false);
  // console.log(data);
  function searchquery(query, accesscode, typer) {
    fetch(`https://api.spotify.com/v1/search?q=${query}&${typer}&limit=50`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accesscode}`,
      },
    })
      .then((e) => e.json())
      .then((e) => {
        ondata(e);
      });
  }
  useEffect(() => {
    searchquery(query, accesscode, "type=playlist%2Calbum%2Cartist%2Ctrack");
    all.current.classList.add("focus");
  }, []);
  useEffect(() => {
    if (query === "") {
      onquery("popular");
    }
  }, [query]);
  return (
    <div className={styles.mainpage}>
      <Sidebar></Sidebar>
      <div className={styles.main}>
        <div className={styles.search_parent}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search for artist,songs and ..."
            onChange={(e) => {
              onquery(e.target.value);
            }}
            ref={micro}
            onClick={(e) => {
              onfocus(true);
            }}
          />
          <svg
            role="img"
            height="24"
            width="24"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className={styles.search_svg}
            onClick={(e) => {
              let s;
              if (allselect) {
                s = "type=playlist%2Calbum%2Cartist%2Ctrack";
              } else if (songsselect) {
                s = "type=track";
              } else if (playselect) {
                s = "type=playlist";
              } else if (alselect) {
                s = "type=album";
              } else {
                s = "type=artist";
              }
              searchquery(query, accesscode, s);
              micro.current.focus();
            }}
          >
            <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
          </svg>
          {focus && micro?.current?.value !== "" && (
            <svg
              role="img"
              height="24"
              width="24"
              className={styles.cross}
              viewBox="0 0 24 24"
              onClick={(e) => {
                micro.current.value = "";
                onquery("");
                onfocus(false);
                micro.current.focus();
              }}
            >
              <path d="M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z"></path>
            </svg>
          )}
        </div>
        <div className={styles.genre}>
          <div
            className={styles.all}
            ref={all}
            onClick={(e) => {
              searchquery(
                query,
                accesscode,
                "type=playlist%2Calbum%2Cartist%2Ctrack"
              );
              songs.current.classList.remove("focus");
              play.current.classList.remove("focus");
              album.current.classList.remove("focus");
              artist.current.classList.remove("focus");
              all.current.classList.add("focus");
              onallselect(true);
              onsongsselect(false);
              onplayselect(false);
              onalselect(false);
              onaselect(false);
            }}
          >
            All
          </div>
          <div
            className={styles.songs}
            ref={songs}
            onClick={(e) => {
              searchquery(query, accesscode, "type=track");
              all.current.classList.remove("focus");
              play.current.classList.remove("focus");
              album.current.classList.remove("focus");
              artist.current.classList.remove("focus");
              songs.current.classList.add("focus");
              onallselect(false);
              onsongsselect(true);
              onplayselect(false);
              onalselect(false);
              onaselect(false);
            }}
          >
            Songs
          </div>
          <div
            className={styles.play}
            ref={play}
            onClick={(e) => {
              searchquery(query, accesscode, "type=playlist");
              songs.current.classList.remove("focus");
              all.current.classList.remove("focus");
              album.current.classList.remove("focus");
              artist.current.classList.remove("focus");
              play.current.classList.add("focus");
              onallselect(false);
              onsongsselect(false);
              onplayselect(true);
              onalselect(false);
              onaselect(false);
            }}
          >
            Playlists
          </div>
          <div
            className={styles.album}
            ref={album}
            onClick={(e) => {
              searchquery(query, accesscode, "type=album");
              songs.current.classList.remove("focus");
              play.current.classList.remove("focus");
              all.current.classList.remove("focus");
              artist.current.classList.remove("focus");
              album.current.classList.add("focus");
              onallselect(false);
              onsongsselect(false);
              onplayselect(false);
              onalselect(true);
              onaselect(false);
            }}
          >
            Album
          </div>
          <div
            className={styles.artist}
            ref={artist}
            onClick={(e) => {
              searchquery(query, accesscode, "type=artist");
              songs.current.classList.remove("focus");
              play.current.classList.remove("focus");
              album.current.classList.remove("focus");
              all.current.classList.remove("focus");
              artist.current.classList.add("focus");
              onallselect(false);
              onsongsselect(false);
              onplayselect(false);
              onalselect(false);
              onaselect(true);
            }}
          >
            Artists
          </div>
        </div>
        {songsselect && <ContentTrack data={data} />}
        {allselect && <ContentAll data={data} />}
        {playselect && <ContentAlbum data={data} />}
        {alselect && <ContentPlaylist data={data} />}
        {aselect && <ContentArtist data={data} />}
      </div>
    </div>
  );
}
export default Mainpage;
