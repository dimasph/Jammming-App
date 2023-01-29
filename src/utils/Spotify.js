import { clientId as id } from "../config";
const clientId = id;
const redirectUri = "http://localhost:3002/";

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    //window.location.href property sets or returns the entire URL of the current page.

    //Using regex to search for the strings 'access_token=' & expires_in='. The result of this regex is an array that contains the entire matched string as the first element and captured group as the second one (the access token and expiration time respectively)

    //window is the global object that represents the browser's window. It provides access to various browser-specific features such as the current URL, the history, the DOM, and more.

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    //If both regular expressions matched something in the URL, then the access token and expiration time have been successfully extracted and can be used to make requests to the Spotify API.

    //The code inside the if statement will proceed to extract the access token and expiration time from the match arrays and then set a timeout to clear the access token after the specified expiration time.

    if (accessTokenMatch && expiresInMatch) {
      //Access token corresponds to the second element:
      accessToken = accessTokenMatch[1];

      //Convert expiration into a number:
      const expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

      //It also pushes the current state of the page to history with the 'Access Token' state and redirects the user to '/':

      window.history.pushState("Access Token", null, "/");
      return accessToken;
    }

    //If the regular expressions don't match anything, the user is not currently authenticated and the function redirects the user to the Spotify login page to grant the application access:
    else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  //Send a search request to Spotify API & return response list of tracks in JSON format:
  //

  search(term) {
    const accessToken = Spotify.getAccessToken();
    //fetch API to make GET request to endpoint that return a promise that resolves to the HTTP response from the API:
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        //response parsed as JSON:
        return response.json();
      })
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) {
          return [];
        }
        //if response contains any tracks, then return an array of track objects with those details:
        return jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
      });
  },

  //Method that saves user's playlist:

  savePlaylist(name, tracksUriArray) {
    if (!name || !tracksUriArray.length) {
      return;
    }
    const accessToken = Spotify.getAccessToken();
    //Bearer authentication is a type of authetication where the client send and access token to the server , and the server grants access if the token is valid:

    const headers = { Authorization: `Bearer ${accessToken}` };
    let userID;
    //Request that returns userID:
    return fetch(`https://api.spotify.com/v1/${clientId}`, {
      headers: headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        userID = jsonResponse.id;
        //Return userID to make a POST request that creates new playlist in the user's account:
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: name }),
        })
          .then((response) => {
            return response.json();
          })
          .then((jsonResponse) => {
            let playlistID = jsonResponse.id;
            //Add array of songs to playlist:
            return fetch(
              `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: tracksUriArray }),
              }
            );
          });
      });
  },
};

console.log(Spotify.getAccessToken());
export default Spotify;
