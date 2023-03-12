import styled from "styled-components";

export const CtrlButtons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  margin: 20px auto 0;
`;

const CtrlBtn = styled.button`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  /* transition: all 250ms linear; */
  transition-duration: 250ms;

  :active {
    box-shadow: 0 0 10px #48665a7f;
  }
`;

export const SkipBtn = styled(CtrlBtn)`
  svg {
    font-size: 30px;
  }
`;

export const PlayBtn = styled(CtrlBtn)`
  margin: 0 auto;

  svg {
    font-size: 60px;
  }
`;
