import styled from "styled-components";
import FlagRight from "../images/FlagRight.svg";
import FlagLeft from "../images/FlagLeft.svg";
import VoteSignRight from "../images/VoteSignRight.svg";
import VoteSignLeft1 from "../images/VoteSignLeft1.svg";
import VoteSignLeft2 from "../images/VoteSignLeft2.svg";
import FlagHighLow from "../images/FlagHighLow.svg";
import FlagLowHigh from "../images/FlagLowHigh.svg";

const FlagsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

// Left Flag
const LeftFlag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 21vw;
  height: 100%;
  background-image: url(${FlagLeft}), url(${FlagLeft}); /* Two instances */
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 55vh, 100% 55vh; /* Adjusts each flag's size */
  background-position: left 10vh, left 700vh; /* Creates spacing for zig-zag pattern */
  z-index: 20;
`;

// Right Flag
const RightFlag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 21vw;
  height: 100%;
  background-image: url(${FlagRight}), url(${FlagRight}); /* Two instances */
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 55vh, 100% 55vh; /* Adjusts each flag's size */
  background-position: right 50vh, right 850vh; /* Creates spacing for zig-zag pattern */
  transform: scaleX(-1);
  z-index: 20;
`;

// Left Vote Sign
const LeftVoteSign1 = styled.div`
  position: absolute;
  top: 400vh; /* Adjusted to provide spacing and ensure visibility */
  left: 0;
  width: 20vw;
  height: auto;
  min-height: 160vh;
  background-image: url(${VoteSignLeft1});
  background-repeat: repeat-y;
  background-size: 100% 160vh; /* Scales to maintain spacing */
  background-position: left 10vh;
  z-index: 20; /* Above background flags and below article cards */
`;

const LeftVoteSign2 = styled.div`
  position: absolute;
  top: 20vh; /* Adjusted to provide spacing and ensure visibility */
  left: -20vh;
  width: 30vw;
  height: auto;
  min-height: 160vh;
  background-image: url(${VoteSignLeft2});
  background-repeat: repeat-y;
  background-size: 100% 160vh; /* Scales to maintain spacing */
  background-position: left 10vh;
  z-index: 20; /* Above background flags and below article cards */
`;

// Right Vote Sign
const RightVoteSign = styled.div`
  position: absolute;
  top: 150vh;
  right: 0;
  width: 20vw;
  height: auto;
  min-height: 160vh;
  background-image: url(${VoteSignRight});
  background-repeat: repeat-y;
  background-size: 100% 160vh;
  background-position: right 20vh;
  z-index: 20;
`;

// Horizontal Flag Strings (Background layer)
const HighLowFlag1 = styled.div`
  position: absolute;
  top: 200vh;
  left: 0;
  width: 100%;
  height: 150vh;
  background-image: url(${FlagHighLow});
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const HighLowFlag2 = styled.div`
  position: absolute;
  bottom: -20vh;
  left: 0;
  width: 100%;
  height: 150vh;
  background-image: url(${FlagHighLow});
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const LowHighFlag1 = styled.div`
  position: absolute;
  top: -5vh;
  left: 0;
  width: 100%;
  height: calc(200vh + 300px);
  background-image: url(${FlagLowHigh});
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const LowHighFlag2 = styled.div`
  position: absolute;
  top: 400vh;
  left: 0;
  width: 100%;
  height: calc(200vh + 300px);
  background-image: url(${FlagLowHigh});
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  z-index: 0;
`;

const Background = () => {
  return (
    <FlagsContainer>
      <LeftFlag />
      <RightFlag />
      <HighLowFlag1 />
      <HighLowFlag2 />
      <LowHighFlag1 />
      <LowHighFlag2 />
      <LeftVoteSign1 />
      <LeftVoteSign2 />
      <RightVoteSign />
    </FlagsContainer>
  );
};

export default Background;
