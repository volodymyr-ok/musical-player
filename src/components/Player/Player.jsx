import React, { useState } from "react";
import {
  Background,
  Section,
  PlayerLayout,
  PosterContainer,
  PosterWrapper,
  Image,
  SongInfo,
  Timer,
  Volume,
  TimerWrapper,
  VolumeWrapper,
} from "./Player.styled";
import { songs } from "../../helpers/songsData";
import { BsVolumeDown, BsVolumeUp } from "react-icons/bs";
import ControlButtons from "../ContolButtons/ControlButtons";

const Player = () => {
  const [songIndex, setSongIndex] = useState(0);
  const { cover, artist, name, path } = songs[songIndex] || {};

  const time = (t) => {
    let min = Math.floor(t / 60);
    if (min < 10) min = "0" + min;

    let sec = Math.floor(t % 60);
    if (sec < 10) min = "0" + sec;

    return min + ":" + sec;
  };

  return (
    <>
      <Background />
      <audio src={path}></audio>
      <Section>
        <PlayerLayout>
          <PosterContainer className="poster">
            <PosterWrapper>
              <Image src={require(`../../${cover}`)} alt={cover} />
              {/* <Image src={cover} alt={cover} /> */}
            </PosterWrapper>
          </PosterContainer>

          <SongInfo>
            <h2>{artist}</h2>
            <p>{name}</p>
          </SongInfo>

          <TimerWrapper>
            <span>00:00</span>
            <Timer type="range" value="0" />
            <span>00:00</span>
          </TimerWrapper>

          <VolumeWrapper>
            <BsVolumeDown />
            <Volume type="range" min="1" max="100" value="99" />
            <BsVolumeUp />
          </VolumeWrapper>

          <ControlButtons songIndex={songIndex} setSongIndex={setSongIndex} />
        </PlayerLayout>
      </Section>
    </>
  );
};

export default Player;
