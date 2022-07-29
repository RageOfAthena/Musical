import React from "react";
import styles from "./Login.module.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=726fb164dd46494888d0177c1e46052a&response_type=code&redirect_uri=http://localhost:3000/&scope=ugc-image-upload%20user-modify-playback-state%20user-follow-modify%20user-read-recently-played%20user-read-playback-position%20playlist-read-collaborative%20app-remote-control%20user-read-playback-state%20user-read-email%20streaming%20user-top-read%20playlist-modify-public%20user-library-modify%20user-follow-read%20user-read-currently-playing%20user-library-read%20playlist-read-private%20user-read-private%20playlist-modify-private";

function Login() {
  return (
    <div className={styles.div}>
      <a
        className={styles.btn}
        href={AUTH_URL}
        onClick={() => {
          localStorage.setItem("user", true);
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>spotify</title>
          <path
            fill="#1ed760"
            d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.12-16-16-16zM23.361 23.12c-0.32 0.479-0.88 0.64-1.361 0.32-3.76-2.32-8.48-2.801-14.081-1.521-0.557 0.163-1.039-0.239-1.199-0.719-0.16-0.561 0.24-1.040 0.72-1.2 6.080-1.361 11.36-0.8 15.52 1.76 0.56 0.24 0.639 0.879 0.401 1.36zM25.281 18.72c-0.401 0.56-1.121 0.8-1.683 0.4-4.319-2.64-10.879-3.44-15.919-1.84-0.639 0.16-1.36-0.16-1.52-0.8s0.16-1.361 0.8-1.521c5.84-1.759 13.040-0.877 18 2.161 0.481 0.241 0.72 1.040 0.321 1.6zM25.441 14.24c-5.121-3.040-13.681-3.36-18.561-1.839-0.8 0.239-1.6-0.241-1.84-0.961-0.24-0.801 0.24-1.6 0.96-1.841 5.68-1.68 15.040-1.36 20.961 2.161 0.719 0.4 0.959 1.36 0.559 2.080-0.399 0.561-1.36 0.799-2.079 0.4z"
          ></path>
        </svg>
        <span>Login with Spotify</span>
      </a>
    </div>
  );
}
export default Login;
