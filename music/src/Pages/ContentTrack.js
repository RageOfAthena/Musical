import styles from "./ContentTrack.module.css";
import React from "react";
import { authActions } from "../slice.js";
import { useDispatch } from "react-redux";
function Content(props) {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <hr className={styles.hr}></hr>
      <div className={styles.content}>
        <div className={styles.hash}>
          <div className={styles.thashheading}>#</div>
          {props.data?.tracks?.items.slice(0, 10).map((e, i) => {
            return (
              <div className={styles.thash}>
                <span>{i + 1}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.title}>
          <div className={styles.theading}>TITLE</div>
          {props.data?.tracks?.items.slice(0, 10).map((e, i) => {
            return (
              <div
                className={styles.tname}
                onClick={() => {
                  dispatch(authActions.uriupdate({ uri: e?.uri })); //here
                }}
              >
                <img
                  src={e?.album?.images[0]?.url}
                  alt="image"
                  className={styles.timage}
                />
                <span className={styles.tt}>{e?.name}</span>
                <span className={styles.artist}>
                  {props.data?.tracks?.items[1]?.artists.reduce(
                    (p, c, k, ar) => {
                      if (ar.length === 1) return c?.name;
                      if (p === "") return c?.name;
                      return p + "," + c?.name;
                    },
                    ""
                  )}
                </span>
              </div>
            );
          })}
        </div>
        <div className={styles.album}>
          <div className={styles.albumheading}>ALBUM</div>
          {props.data?.tracks?.items.slice(0, 10).map((e, i) => {
            return (
              <div
                className={styles.aname}
                onClick={() => {
                  dispatch(authActions.uriupdate({ uri: e?.uri })); //here
                }}
              >
                <span>{e?.album.name}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.dura}>
          <div className={styles.duraheading}>TIME</div>
          {props.data?.tracks?.items.slice(0, 10).map((e, i) => {
            return (
              <div
                className={styles.dname}
                onClick={() => {
                  dispatch(authActions.uriupdate({ uri: e?.uri })); //here
                }}
              >
                {Math.trunc(e?.duration_ms / 60000)}:
                {Math.trunc(e?.duration_ms / 10000)}
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Content;
