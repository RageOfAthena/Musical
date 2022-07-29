const express = require("express");
const spotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;

  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000/",
    clientId: "726fb164dd46494888d0177c1e46052a",
    clientSecret: "d6f6b3208d584bcc8b9ba10d96ae09b0",
    refreshToken,
  });
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      //   console.log(data.body);
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000/",
    clientId: "726fb164dd46494888d0177c1e46052a",
    clientSecret: "d6f6b3208d584bcc8b9ba10d96ae09b0",
  });
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      //   console.log(err);
      res.sendStatus(400);
    });
});

app.listen(3001);
