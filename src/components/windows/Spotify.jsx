import React from "react";
import MacWindow from "./MacWindow";
import './spotify.scss'

const Spotify = ({windowName={windowName}, setWindowState={setWindowState}}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} width="38vw">
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
