import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import enJodiManjaKuruvi from "./En-Jodi-Manjal-MassTamilan.com.mp3";
import endiIppadi from "./Endi-Ippadi.mp3";
import kanPesumVarthaigal from "./Kan-Peasum-Varthaigal.mp3";
import newNew from "./New-New-MassTamilan.com.mp3";
import happy from "./Happy.mp3";
import { FaPlay } from "react-icons/fa";
import { ImPrevious2 } from "react-icons/im";
import { ImNext2 } from "react-icons/im";
import { FaPause } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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

  useEffect(() => {
    const audio = audioRef.current;
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

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

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const selectTrackHandler = (index) => {
    setCurrentTrackIndex(index);
    setIsPlaying(false);
    audioRef.current.load();
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className="music-player">
      <div className="track-list">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`track-item ${
              index === currentTrackIndex ? "active" : ""
            }`} 
            onClick={() => selectTrackHandler(index)}
          >
            {track.title}
          </div>
        ))}
      </div>
      <div className="player-controls">
        <h2>{tracks[currentTrackIndex].title}</h2>
        <audio ref={audioRef}>
          <source src={tracks[currentTrackIndex].src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="seekbar-container">
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
          />
          <div>
            <span>{formatTime(currentTime)}</span> /{" "}
            <span>{formatTime(duration)}</span>
          </div>
          <div className="controls">
            <button onClick={prevTrackHandler}>
              <ImPrevious2 />
            </button>
            <button onClick={playPauseHandler}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button onClick={nextTrackHandler}>
              <ImNext2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default MusicPlayer;
