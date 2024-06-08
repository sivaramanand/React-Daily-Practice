import React, { useState, useRef } from "react";
import "./style.css";
import enJodiManjaKuruvi from "./En-Jodi-Manjal-MassTamilan.com.mp3";
import endiIppadi from "./Endi-Ippadi.mp3";
import kanPesumVarthaigal from "./Kan-Peasum-Varthaigal.mp3";
import newNew from "./New-New-MassTamilan.com.mp3";
import happy from "./Happy.mp3";
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  const tracks = [
    {
      title: "En Jodi Manja Kuruvi",
      src: enJodiManjaKuruvi,
    },
    {
      title: "Endi Ippadi",
      src: endiIppadi,
    },
    {
      title: "Kan Pesum Varthaigal",
      src: kanPesumVarthaigal,
    },
    {
      title: "New New",
      src: newNew,
    },
    {
      title: "Happy",
      src: happy,
    },
  ];

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const nextTrackHandler = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(false);
    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);
  };

  const prevTrackHandler = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(false);
    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      <h2>{tracks[currentTrackIndex].title}</h2>
      <audio ref={audioRef} controls>
        <source src={tracks[currentTrackIndex].src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div>
        <button onClick={prevTrackHandler}>Previous track</button>
        <button onClick={playPauseHandler}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={nextTrackHandler}>Next track</button>
      </div>
    </div>
  );
};

export default MusicPlayer;
