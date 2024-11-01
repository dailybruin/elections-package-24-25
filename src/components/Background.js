import styled from "styled-components";
import FlagRight from "../images/FlagRight.svg";
import FlagLeft from "../images/FlagRight.svg";
import VoteSignRight from "../images/VoteSignRight.svg";
import VoteSignLeft from "../images/VoteSignLeft.svg";
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
  background-image: url(${FlagLeft});
  background-repeat: repeat-y;
  background-size: 100% 150em;
  background-position: left 0;
`;

// Right Flag
const RightFlag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 21vw;
  height: 100%;
  background-image: url(${FlagRight});
  background-repeat: repeat-y;
  background-size: 100% 150em;
  background-position: right 10vh;
  transform: scaleX(-1);
`;

// Left Vote Sign
const LeftVoteSign = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 20vw; 
  height: 100%;
  background-image: url(${VoteSignLeft});
  background-repeat: repeat-y;
  background-size: 100% 160em;
  background-position: left 100em;
  z-index: 3; /* Set to 3 to be on top of everything */
`;

// Right Vote Sign
const RightVoteSign = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 20vw;
  height: 100%;
  background-image: url(${VoteSignRight});
  background-repeat: repeat-y;
  background-size: 100% 150em;
  background-position: right 200em; 
`;

// Horizontal Flag Strings
const HighLowFlag1 = styled.div`
  position: absolute;
  top: 100em; /* Adjust based on desired layout placement */
  left: 0;
  width: 100%;
  height: 150vh; /* Adjust to control flag height */
  background-image: url(${FlagHighLow});
  background-repeat: repeat-y;
  background-size: cover; 
  background-position: center; 
  z-index: 0; /* Set to 1 to be above the background */
`;

const HighLowFlag2 = styled.div`
  position: absolute;
  bottom: -20em; /* Adjust based on desired layout placement */
  left: 0;
  width: 100%;
  height: 150vh; /* Adjust to control flag height */
  background-image: url(${FlagHighLow});
  background-repeat: repeat-y;
  background-size: cover; 
  background-position: center; 
  z-index: 0; /* Set to 1 to be above the background */
  
`;

const LowHighFlag1 = styled.div`
  position: absolute;
  top: -5%; 
  left: 0;
  width: 100%;
  height: 150vh; /* Adjust to control flag height */
  background-image: url(${FlagLowHigh});
  background-repeat: repeat-y;
  background-size: cover; 
  background-position: center; 
  z-index: 0; /* Set to 0 to be at the back */
`;

const LowHighFlag2 = styled.div`
  position: absolute;
  top: 340em; /* Adjust based on desired layout placement */
  left: 0;
  width: 100%;
  height: 150vh; /* Adjust to control flag height */
  background-image: url(${FlagLowHigh});
  background-repeat: repeat-y;
  background-size: cover; 
  background-position: center; 
  z-index: 0; /* Set to 1 to be above the background */
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
      <LeftVoteSign />
      <RightVoteSign />
    </FlagsContainer>
  );
};

export default Background;
