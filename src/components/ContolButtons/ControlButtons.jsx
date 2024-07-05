import React from "react";
import { CtrlButtons, SkipBtn, PlayBtn } from "./ControlButtons.styled";
import {
  BsSkipStartFill,
  BsFillSkipEndFill,
  BsFillPlayFill,
  // BsPauseFill,
} from "react-icons/bs";
import { songs } from "../../helpers/songsData";

const ControlButtons = ({ songIndex, setSongIndex }) => {
  const playPrev = () => {
    if (songIndex <= 0) setSongIndex(songs.length - 1);
    else setSongIndex(songIndex - 1);
  };

  const playNext = () => {
    if (songIndex >= songs.length - 1) setSongIndex(0);
    else setSongIndex(songIndex + 1);
  };

  const togglePlaying = () => {};

  return (
    <CtrlButtons>
      <SkipBtn type="button" onClick={playPrev}>
        <BsSkipStartFill />
      </SkipBtn>

      <PlayBtn type="button" onClick={togglePlaying}>
        <BsFillPlayFill />
        {/* <BsPauseFill /> */}
      </PlayBtn>

      <SkipBtn type="button" onClick={playNext}>
        <BsFillSkipEndFill />
      </SkipBtn>
    </CtrlButtons>
  );
};

export default ControlButtons;
