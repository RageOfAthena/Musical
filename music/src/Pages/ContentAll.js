import styles from "./ContentAll.module.css";
import React from "react";
import "./styless.css";
import { authActions } from "../slice.js";
import { useDispatch } from "react-redux";
function ContentAll(props) {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className={styles.everything}>
        <div className={styles.songs}>
          <div className={styles.left}>
            <h1 className={styles.top}>Top result</h1>
            <div
              className={styles.card}
              onClick={() => {
                dispatch(
                  authActions.uriupdate({
                    uri: props.data?.tracks?.items[0]?.uri,
                  })
                );
              }}
              onMouseEnter={() => {
                document.querySelector(".pgwIORyBdf4nbb4G5_Jx").style.opacity =
                  "1";
                document.querySelector(".pgwIORyBdf4nbb4G5_Jx").style.bottom =
                  "86px";
              }}
              onMouseLeave={() => {
                document.querySelector(".pgwIORyBdf4nbb4G5_Jx").style.opacity =
                  "0";
                document.querySelector(".pgwIORyBdf4nbb4G5_Jx").style.bottom =
                  "78px";
              }}
            >
              {props.data?.tracks?.items[0]?.album?.images[0].url ===
              undefined ? (
                <svg
                  role="img"
                  height="64"
                  width="64"
                  aria-hidden="true"
                  data-testid="card-image-fallback"
                  viewBox="0 0 24 24"
                  className={styles.svg}
                >
                  <path d="M13.363 10.474l-.521.625a2.499 2.499 0 00.67 3.766l.285.164a5.998 5.998 0 011.288-1.565l-.573-.33a.5.5 0 01-.134-.754l.52-.624a7.372 7.372 0 001.837-4.355 7.221 7.221 0 00-.29-2.489 5.644 5.644 0 00-3.116-3.424A5.771 5.771 0 006.753 2.87a5.7 5.7 0 00-1.19 2.047 7.22 7.22 0 00-.29 2.49 7.373 7.373 0 001.838 4.355l.518.622a.5.5 0 01-.134.753L3.5 15.444a5 5 0 00-2.5 4.33v2.231h13.54a5.981 5.981 0 01-1.19-2H3v-.23a3 3 0 011.5-2.6l3.995-2.308a2.5 2.5 0 00.67-3.766l-.521-.625a5.146 5.146 0 01-1.188-4.918 3.71 3.71 0 01.769-1.334 3.769 3.769 0 015.556 0c.346.386.608.84.768 1.334.157.562.22 1.146.187 1.728a5.379 5.379 0 01-1.373 3.188zm7.641-1.173a1 1 0 00-1 1v4.666h-1a3 3 0 103 3v-7.666a.999.999 0 00-1.003-1h.003zm-1 8.666a1 1 0 11-1-1h1v1z"></path>
                </svg>
              ) : (
                <img
                  src={props.data?.tracks?.items[0]?.album?.images[0].url}
                  alt="image"
                  className={styles.card_img}
                />
              )}

              <h1 className={styles.card_head}>
                {props.data?.tracks?.items[0]?.name}
              </h1>
              <p className={styles.card_para}>
                {props.data?.tracks?.items[1]?.artists.reduce((p, c, k, ar) => {
                  if (ar.length === 1) return c?.name;
                  if (p === "") return c?.name;
                  return p + "," + c?.name;
                }, "")}
              </p>
            </div>
            <div class="pgwIORyBdf4nbb4G5_Jx">
              <div class="PFgcCoJSWC3KjhZxHDYH">
                <button
                  data-testid="play-button"
                  aria-label="Play"
                  class="Button-qlcn5g-0 hgTVhT"
                >
                  <span class="ButtonInner-sc-14ud5tc-0 dPQjiN encore-bright-accent-set">
                    <span
                      aria-hidden="true"
                      class="IconWrapper__Wrapper-sc-1hf1hjl-0 hLwsDE"
                    >
                      <svg
                        role="img"
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        class="Svg-ytk21e-0 jAKAlG"
                      >
                        <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.top}>Songs</h1>
            <div className={styles.cardr}>
              {props.data?.tracks?.items.slice(0, 5).map((e, i) => {
                return (
                  <div
                    className={styles.tname}
                    onClick={() => {
                      dispatch(
                        authActions.uriupdate({
                          uri: e?.uri,
                        })
                      );
                    }}
                  >
                    {e?.album?.images[0]?.url === undefined ? (
                      <svg
                        role="img"
                        height="64"
                        width="64"
                        aria-hidden="true"
                        data-testid="card-image-fallback"
                        viewBox="0 0 24 24"
                        className={styles.svg}
                      >
                        <path d="M13.363 10.474l-.521.625a2.499 2.499 0 00.67 3.766l.285.164a5.998 5.998 0 011.288-1.565l-.573-.33a.5.5 0 01-.134-.754l.52-.624a7.372 7.372 0 001.837-4.355 7.221 7.221 0 00-.29-2.489 5.644 5.644 0 00-3.116-3.424A5.771 5.771 0 006.753 2.87a5.7 5.7 0 00-1.19 2.047 7.22 7.22 0 00-.29 2.49 7.373 7.373 0 001.838 4.355l.518.622a.5.5 0 01-.134.753L3.5 15.444a5 5 0 00-2.5 4.33v2.231h13.54a5.981 5.981 0 01-1.19-2H3v-.23a3 3 0 011.5-2.6l3.995-2.308a2.5 2.5 0 00.67-3.766l-.521-.625a5.146 5.146 0 01-1.188-4.918 3.71 3.71 0 01.769-1.334 3.769 3.769 0 015.556 0c.346.386.608.84.768 1.334.157.562.22 1.146.187 1.728a5.379 5.379 0 01-1.373 3.188zm7.641-1.173a1 1 0 00-1 1v4.666h-1a3 3 0 103 3v-7.666a.999.999 0 00-1.003-1h.003zm-1 8.666a1 1 0 11-1-1h1v1z"></path>
                      </svg>
                    ) : (
                      <img
                        src={e?.album?.images[0]?.url}
                        alt="image"
                        className={styles.timage}
                      />
                    )}

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
              <div className={styles.dura}>
                {props.data?.tracks?.items.slice(0, 5).map((e, i) => {
                  return (
                    <div className={styles.dname}>
                      {Math.trunc(e?.duration_ms / 60000)}:
                      {Math.trunc(e?.duration_ms / 10000) % 10 ===
                      Math.trunc(e?.duration_ms / 10000)
                        ? Math.trunc(e?.duration_ms / 10000) * 10
                        : Math.trunc(e?.duration_ms / 10000)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.artists}>
          <h1 className={styles.artistshead}>Artists</h1>
          <div className={styles.artistsflex}>
            {props.data?.artists?.items.slice(0, 5).map((e, i) => {
              return (
                <div className={styles.flexchild}>
                  {e?.images[0]?.url === undefined ? (
                    <svg
                      role="img"
                      height="64"
                      width="64"
                      aria-hidden="true"
                      data-testid="card-image-fallback"
                      viewBox="0 0 24 24"
                      className={styles.svg}
                    >
                      <path d="M13.363 10.474l-.521.625a2.499 2.499 0 00.67 3.766l.285.164a5.998 5.998 0 011.288-1.565l-.573-.33a.5.5 0 01-.134-.754l.52-.624a7.372 7.372 0 001.837-4.355 7.221 7.221 0 00-.29-2.489 5.644 5.644 0 00-3.116-3.424A5.771 5.771 0 006.753 2.87a5.7 5.7 0 00-1.19 2.047 7.22 7.22 0 00-.29 2.49 7.373 7.373 0 001.838 4.355l.518.622a.5.5 0 01-.134.753L3.5 15.444a5 5 0 00-2.5 4.33v2.231h13.54a5.981 5.981 0 01-1.19-2H3v-.23a3 3 0 011.5-2.6l3.995-2.308a2.5 2.5 0 00.67-3.766l-.521-.625a5.146 5.146 0 01-1.188-4.918 3.71 3.71 0 01.769-1.334 3.769 3.769 0 015.556 0c.346.386.608.84.768 1.334.157.562.22 1.146.187 1.728a5.379 5.379 0 01-1.373 3.188zm7.641-1.173a1 1 0 00-1 1v4.666h-1a3 3 0 103 3v-7.666a.999.999 0 00-1.003-1h.003zm-1 8.666a1 1 0 11-1-1h1v1z"></path>
                    </svg>
                  ) : (
                    <img
                      src={e?.images[0]?.url}
                      alt="image"
                      className={styles.artistimg}
                    />
                  )}

                  <h3 className={styles.h3}>
                    {e?.name.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <h4 className={styles.h5}>Artist</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.albums}>
          <h1 className={styles.artistshead}>Albums</h1>
          <div className={styles.artistsflex}>
            {props.data?.albums?.items.slice(0, 5).map((e, i) => {
              return (
                <div className={styles.flexchild}>
                  {e?.images[0]?.url === undefined ? (
                    <svg
                      role="img"
                      height="64"
                      width="64"
                      aria-hidden="true"
                      data-testid="card-image-fallback"
                      viewBox="0 0 24 24"
                      className={styles.svg}
                    >
                      <path d="M13.363 10.474l-.521.625a2.499 2.499 0 00.67 3.766l.285.164a5.998 5.998 0 011.288-1.565l-.573-.33a.5.5 0 01-.134-.754l.52-.624a7.372 7.372 0 001.837-4.355 7.221 7.221 0 00-.29-2.489 5.644 5.644 0 00-3.116-3.424A5.771 5.771 0 006.753 2.87a5.7 5.7 0 00-1.19 2.047 7.22 7.22 0 00-.29 2.49 7.373 7.373 0 001.838 4.355l.518.622a.5.5 0 01-.134.753L3.5 15.444a5 5 0 00-2.5 4.33v2.231h13.54a5.981 5.981 0 01-1.19-2H3v-.23a3 3 0 011.5-2.6l3.995-2.308a2.5 2.5 0 00.67-3.766l-.521-.625a5.146 5.146 0 01-1.188-4.918 3.71 3.71 0 01.769-1.334 3.769 3.769 0 015.556 0c.346.386.608.84.768 1.334.157.562.22 1.146.187 1.728a5.379 5.379 0 01-1.373 3.188zm7.641-1.173a1 1 0 00-1 1v4.666h-1a3 3 0 103 3v-7.666a.999.999 0 00-1.003-1h.003zm-1 8.666a1 1 0 11-1-1h1v1z"></path>
                    </svg>
                  ) : (
                    <img
                      src={e?.images[0]?.url}
                      alt={e?.name}
                      className={styles.albumimg}
                    />
                  )}

                  <h3 className={styles.h3}>
                    {e?.name.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <h4 className={styles.h4}>
                    {e?.release_date.split("-").slice(0, 1)} - {}
                    {e?.artists.slice(0, 2).reduce((p, c, k, ar) => {
                      if (ar.length === 1) return c?.name;
                      if (p === "") return c?.name;
                      return p + "," + c?.name;
                    }, "")}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.playlist}>
          <h1 className={styles.artistshead}>Playlists</h1>
          <div className={styles.artistsflex}>
            {props.data?.playlists?.items.slice(0, 5).map((e, i) => {
              return (
                <div className={styles.flexchild}>
                  {e?.images[0].url === undefined ? (
                    <svg
                      role="img"
                      height="64"
                      width="64"
                      aria-hidden="true"
                      data-testid="card-image-fallback"
                      viewBox="0 0 24 24"
                      className={styles.svg}
                    >
                      <path d="M13.363 10.474l-.521.625a2.499 2.499 0 00.67 3.766l.285.164a5.998 5.998 0 011.288-1.565l-.573-.33a.5.5 0 01-.134-.754l.52-.624a7.372 7.372 0 001.837-4.355 7.221 7.221 0 00-.29-2.489 5.644 5.644 0 00-3.116-3.424A5.771 5.771 0 006.753 2.87a5.7 5.7 0 00-1.19 2.047 7.22 7.22 0 00-.29 2.49 7.373 7.373 0 001.838 4.355l.518.622a.5.5 0 01-.134.753L3.5 15.444a5 5 0 00-2.5 4.33v2.231h13.54a5.981 5.981 0 01-1.19-2H3v-.23a3 3 0 011.5-2.6l3.995-2.308a2.5 2.5 0 00.67-3.766l-.521-.625a5.146 5.146 0 01-1.188-4.918 3.71 3.71 0 01.769-1.334 3.769 3.769 0 015.556 0c.346.386.608.84.768 1.334.157.562.22 1.146.187 1.728a5.379 5.379 0 01-1.373 3.188zm7.641-1.173a1 1 0 00-1 1v4.666h-1a3 3 0 103 3v-7.666a.999.999 0 00-1.003-1h.003zm-1 8.666a1 1 0 11-1-1h1v1z"></path>
                    </svg>
                  ) : (
                    <img
                      src={e?.images[0].url}
                      alt={e?.name}
                      className={styles.albumimg}
                    />
                  )}

                  <h3 className={styles.h3}>
                    {e?.name.split(" ").slice(0, 2).join(" ")}
                  </h3>
                  <h4 className={styles.h8}>By {e?.owner?.display_name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentAll;
