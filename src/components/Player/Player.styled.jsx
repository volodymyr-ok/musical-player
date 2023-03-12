import styled from "styled-components";
import casseteBg from "../../assets/backgrounds/casseteBg.jpg";
import retroBg from "../../assets//backgrounds/retroBg.jpg";

export const Background = styled.div`
  /* background: url(${retroBg}) no-repeat center / cover; */
  background: url(${casseteBg}) no-repeat center / cover;
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayerLayout = styled.div`
  background: rgba(96, 75, 101, 0.1);
  width: 100%;
  max-width: 450px;
  height: 600px;
  border-radius: 30px;
  border: 1px solid rgba(229, 143, 219, 0.5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1),
    0 0 20px rgba(255, 255, 255, 0.1), 0 0 30px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

export const PosterContainer = styled.div`
  padding: 50px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PosterWrapper = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
`;

export const SongInfo = styled.div`
  padding: 20px;
  padding-top: 0;
  text-align: center;

  h2 {
    /* color: yellowgreen; */
    font-size: 30px;
  }
  p {
    font-size: 24px;
  }
`;

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 18px;
    padding: 0 10px;
  }
`;

export const Timer = styled.input`
  appearance: none;
  background: #5583ee;
  height: 5px;
  width: 60%;

  cursor: pointer;
`;

export const VolumeWrapper = styled(TimerWrapper)`
  margin-top: 20px;
  svg {
    font-size: 15px;
  }
`;

export const Volume = styled(Timer)`
  width: 30%;
`;

// export const CtrlButtons = styled(VolumeWrapper)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const CtrlBtn = styled.button`
//   :nth-child(2),
//   :nth-child(3) {
//     svg {
//       font-size: 60px;
//     }
//     margin: 0 50px;
//   }

//   svg {
//     font-size: 30px;
//   }
// `;
